
//const namespace = 'http://www.w3.org/2003/12/exif/ns#'
const tags = require('./tags')

const { readTiffHeader } = require('./tiff')

const {
  readString,
  readInt16,
  readInt32,
  readUInt16,
  readUInt32
} = require('./util')

const {
  isDateTag,
  parseDate
} = require('./date')


module.exports = readExif

const EXIF = Buffer.from('Exif\0', 'ascii')

function readExif(buffer, opts = {}) {
  if (buffer.slice(0, 5).compare(EXIF) === 0)
    buffer = buffer.slice(6)

  let { isBigEndian, ifdOffset } = readTiffHeader(buffer)

  let result = {}
  let ifd0 = readTags(buffer, ifdOffset, isBigEndian, tags.exif, opts)
  result.image = ifd0

  let numEntries = readUInt16(buffer, ifdOffset, isBigEndian)
  ifdOffset = readUInt32(buffer, ifdOffset + 2 + numEntries * 12, isBigEndian)
  if (ifdOffset !== 0)
    result.thumbnail = readTags(buffer, ifdOffset, isBigEndian, tags.exif, opts)

  if (ifd0.exif_IFD_Pointer)
    result.exif = readTags(buffer, ifd0.exif_IFD_Pointer, isBigEndian, tags.exif, opts)

  if (ifd0.gpsInfo_IFD_Pointer)
    result.gps = readTags(buffer, ifd0.gpsInfo_IFD_Pointer, isBigEndian, tags.gps, opts)

  if (ifd0.interopOffset)
    result.interop = readTags(buffer, ifd0.interopOffset, isBigEndian, tags.exif, opts)

  return result
}

function readTags(buffer, offset, isBigEndian, tags, opts) {
  try {
    let numEntries = readUInt16(buffer, offset, isBigEndian)
    offset += 2

    let res = {}
    for (let i = 0; i < numEntries; i++) {
      let tag = readUInt16(buffer, offset, isBigEndian)
      offset += 2

      let key = tags[tag] || tag
      let val = readTag(buffer, offset, isBigEndian)

      if (isDateTag(key))
        val = parseDate(val, opts.timezoneOffset || 0)

      res[key] = val
      offset += 10
    }

    return res

  } catch (error) {
    return error
  }
}

const SIZE_LOOKUP = [1, 1, 2, 4, 8, 1, 1, 2, 4, 8]

function readTag(buffer, offset, isBigEndian) {
  let type = readUInt16(buffer, offset, isBigEndian)

  // Exit early in case of unknown or bogus type
  if (!type || type > SIZE_LOOKUP.length)
    return null

  let numValues = readUInt32(buffer, offset + 2, isBigEndian)
  let valueSize = SIZE_LOOKUP[type - 1]
  let valueOffset = valueSize * numValues <= 4 ?
    offset + 6:
    readUInt32(buffer, offset + 6, isBigEndian)

  if (type === 2)
    return readString(buffer, valueOffset, numValues)
  if (type === 7)
    return buffer.slice(valueOffset, valueOffset + numValues)

  if (numValues === 1)
    return readValue(buffer, valueOffset, isBigEndian, type)

  return readValues(buffer, valueOffset, valueSize, numValues, isBigEndian, type)
}


function readValues(buffer, offset, size, num, isBigEndian, type) {
  let res = []
  for (let i = 0; i < num; i++) {
    res.push(readValue(buffer, offset, isBigEndian, type))
    offset += size
  }
  return res
}

function readValue(buffer, offset, isBigEndian, type) {
  switch (type) {
  case 1: // uint8
    return buffer[offset]
  case 3: // uint16
    return readUInt16(buffer, offset, isBigEndian)
  case 4: // uint32
    return readUInt32(buffer, offset, isBigEndian)
  case 5: // unsigned rational
    return readUInt32(buffer, offset, isBigEndian) / readUInt32(buffer, offset + 4, isBigEndian)
  case 6: // int8
    return buffer.readInt8(offset)
  case 8: // int16
    return readInt16(buffer, offset, isBigEndian)
  case 9: // int32
    return readInt32(buffer, offset, isBigEndian)
  case 10: // signed rational
    return readInt32(buffer, offset, isBigEndian) / readInt32(buffer, offset + 4, isBigEndian)
  }
}

