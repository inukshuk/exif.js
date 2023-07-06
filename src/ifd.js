'use strict'

const {
  readUInt16,
  readUInt32,
  readAsciiString,
  readUcs2String,
  readValues
} = require('./util')

const {
  parseDateValues
} = require('./date')

const TYPE_SIZE = [1, 1, 2, 4, 8, 1, 1, 2, 4, 8]
const NAMESPACE = 'http://www.w3.org/2003/12/exif/ns#'

const identity = (x) => x
const isUCS2 = (tag) => tag >= 0x9c9b && tag <= 0x9c9f

class IFD {
  static get context() {
    return {
      '@vocab': NAMESPACE
    }
  }

  static read(buffer, offset, isBigEndian, TAGS, opts = {}, meta = {}) {
    try {
      var ifd = new IFD({}, isBigEndian)
      let count = readUInt16(buffer, offset, isBigEndian)

      offset += 2

      for (let i = 0; i < count; ++i, offset += 12) {
        try {
          let tag = readUInt16(buffer, offset, isBigEndian)
          let value = IFD.readTagValue(tag, buffer, offset + 2, isBigEndian)
          let key = TAGS[tag] || tag

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

  static readTagValue(tag, buffer, offset, isBigEndian) {
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

    if (type === 1 && isUCS2(tag))
      return readUcs2String(buffer, vOffset, count)

    let values = readValues(buffer, vOffset, size, count, isBigEndian, type)

    return (values.length === 1) ?
      values[0] :
      values
  }

  constructor(tags = {}, isBigEndian = false) {
    this.isBigEndian = isBigEndian
    this.tags = tags
  }

  get exif() {
    return this.tags.exif_IFD_Pointer
  }

  set exif(value) {
    this.tags.exif_IFD_Pointer = value
  }

  get gpsInfo() {
    return this.tags.gpsInfo_IFD_Pointer
  }

  set gpsInfo(value) {
    this.tags.gpsInfo_IFD_Pointer = value
  }

  set interoperability(value) {
    this.tags.interoperability_IFD_Pointer = value
  }

  get printImageMatching() {
    return this.tags.printImageMatching_IFD_Pointer
  }

  set printImageMatching(value) {
    this.tags.printImageMatching_IFD_Pointer = value
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
