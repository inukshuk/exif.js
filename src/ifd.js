'use strict'

const {
  readUInt16,
  readUInt32,
  readAsciiString,
  readValues
} = require('./util')

const {
  parseDateValues
} = require('./date')

const TYPE_SIZE = [1, 1, 2, 4, 8, 1, 1, 2, 4, 8]
const NAMESPACE = 'http://www.w3.org/2003/12/exif/ns#'

const identity = (x) => x

class IFD {
  static get context() {
    return {
      '@vocab': NAMESPACE
    }
  }

  static read(buffer, offset, isBigEndian, TAGS, opts = {}, meta = {}) {
    try {
      var ifd = new IFD()
      let count = readUInt16(buffer, offset, isBigEndian)

      offset += 2

      for (let i = 0; i < count; ++i, offset += 12) {
        try {
          let tag = readUInt16(buffer, offset, isBigEndian)
          let key = TAGS[tag] || tag
          let value = IFD.readTagValue(buffer, offset + 2, isBigEndian)

          ifd.tags[key] = value

        } catch (error) {
          error.offset = offset

          if (meta.errors)
            meta.errors.push(error)
          else
            throw error
        }
      }

      parseDateValues(ifd.tags, opts.timezone)

      meta.next = readUInt32(buffer, offset, isBigEndian)

    } catch (error) {
      error.offset = offset

      if (meta.errors)
        meta.errors.push(error)
      else
        throw error
    }

    return ifd
  }

  static readTagValue(buffer, offset, isBigEndian) {
    let type = readUInt16(buffer, offset, isBigEndian)

    if (!type || type > TYPE_SIZE.length)
      return null

    let count = readUInt32(buffer, offset + 2, isBigEndian)
    let size = TYPE_SIZE[type - 1]
    let vOffset = size * count <= 4 ?
      offset + 6:
      readUInt32(buffer, offset + 6, isBigEndian)

    if (type === 2)
      return readAsciiString(buffer, vOffset, count)

    if (type === 7)
      return buffer.slice(vOffset, vOffset + count)

    let values = readValues(buffer, vOffset, size, count, isBigEndian, type)

    return (values.length === 1) ?
      values[0] :
      values
  }

  constructor(tags = {}) {
    this.tags = tags
  }

  get exif() {
    return this.tags.exif_IFD_Pointer
  }

  set exif(value) {
    return this.tags.exif_IFD_Pointer = value
  }

  get gpsInfo() {
    return this.tags.gpsInfo_IFD_Pointer
  }

  set gpsInfo(value) {
    return this.tags.gpsInfo_IFD_Pointer = value
  }

  set interoperability(value) {
    return this.tags.interoperability_IFD_Pointer = value
  }

  get printImageMatching() {
    return this.tags.printImageMatching_IFD_Pointer
  }

  set printImageMatching(value) {
    return this.tags.printImageMatching_IFD_Pointer = value
  }

  flatten(expand = false, mapValue = identity) {
    let tags = {}

    for (let key in this.tags) {
      let value = this.tags[key]
      if (value instanceof IFD)
        Object.assign(tags, value.flatten(expand, mapValue))
      else
        tags[expand ? NAMESPACE + key : key] = mapValue(value)
    }

    return tags
  }

  toJSON(key) {
    let json = {}

    if (key == null)
      json['@context'] = IFD.context
    json['@type'] = 'IFD'

    return { ...json, ...this.tags }
  }
}

module.exports = IFD
