
//const namespace = 'http://www.w3.org/2003/12/exif/ns#'
const tags = require('./tags')

const {
  readInt16,
  readInt32,
  readUInt16,
  readUInt32
} = require('./util')

const {
  isDateTag,
  parseDate
} = require('./date')


module.exports = parse


function parse(buffer, opts = {}) {
  if (buffer.toString('ascii', 0, 5) !== 'Exif\0')
    throw new Error(invalid('buffer should start with "Exif"'))

  let bigEndian = isBigEndian(buffer)

  if (readUInt16(buffer, 8, bigEndian) !== 0x002A)
    throw new Error(invalid('expected 0x002A.'))

  let ifdOffset = readUInt32(buffer, 10, bigEndian) + 6
  if (ifdOffset < 8)
    throw new Error(invalid('ifdOffset < 8'))

  let result = {}
  let ifd0 = readTags(buffer, ifdOffset, bigEndian, tags.exif, opts)
  result.image = ifd0

  let numEntries = readUInt16(buffer, ifdOffset, bigEndian)
  ifdOffset = readUInt32(buffer, ifdOffset + 2 + numEntries * 12, bigEndian)
  if (ifdOffset !== 0)
    result.thumbnail = readTags(buffer, ifdOffset + 6, bigEndian, tags.exif, opts)

  if (ifd0.exifOffset)
    result.exif = readTags(buffer, ifd0.exifOffset + 6, bigEndian, tags.exif, opts)

  if (ifd0.gpsInfo)
    result.gps = readTags(buffer, ifd0.gpsInfo + 6, bigEndian, tags.gps, opts)

  if (ifd0.interopOffset)
    result.interop = readTags(buffer, ifd0.interopOffset + 6, bigEndian, tags.exif, opts)

  return result
}

function readTags(buffer, offset, bigEndian, tags, opts) {
  try {
    let numEntries = readUInt16(buffer, offset, bigEndian)
    offset += 2

    let res = {}
    for (let i = 0; i < numEntries; i++) {
      let tag = readUInt16(buffer, offset, bigEndian)
      offset += 2

      let key = tags[tag] || tag
      let val = readTag(buffer, offset, bigEndian)

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

function readTag(buffer, offset, bigEndian) {
  let type = readUInt16(buffer, offset, bigEndian)

  // Exit early in case of unknown or bogus type
  if (!type || type > SIZE_LOOKUP.length)
    return null

  let numValues = readUInt32(buffer, offset + 2, bigEndian)
  let valueSize = SIZE_LOOKUP[type - 1]
  let valueOffset = valueSize * numValues <= 4 ?
    offset + 6 :
    readUInt32(buffer, offset + 6, bigEndian) + 6

  if (type === 2)
    return readString(buffer, valueOffset, numValues)
  if (type === 7)
    return buffer.slice(valueOffset, valueOffset + numValues)

  if (numValues === 1)
    return readValue(buffer, valueOffset, bigEndian, type)

  return readValues(buffer, valueOffset, valueSize, numValues, bigEndian, type)
}

function readString(buffer, offset, length) {
  let string = buffer.toString('ascii', offset, offset + length)
  if (string[string.length - 1] === '\0') // remove null terminator
    string = string.slice(0, -1)
  return string
}

function readValues(buffer, offset, size, num, bigEndian, type) {
  let res = []
  for (let i = 0; i < num; i++) {
    res.push(readValue(buffer, offset, bigEndian, type))
    offset += size
  }
  return res
}

function readValue(buffer, offset, bigEndian, type) {
  switch (type) {
  case 1: // uint8
    return buffer[offset]
  case 3: // uint16
    return readUInt16(buffer, offset, bigEndian)
  case 4: // uint32
    return readUInt32(buffer, offset, bigEndian)
  case 5: // unsigned rational
    return readUInt32(buffer, offset, bigEndian) / readUInt32(buffer, offset + 4, bigEndian)
  case 6: // int8
    return buffer.readInt8(offset)
  case 8: // int16
    return readInt16(buffer, offset, bigEndian)
  case 9: // int32
    return readInt32(buffer, offset, bigEndian)
  case 10: // signed rational
    return readInt32(buffer, offset, bigEndian) / readInt32(buffer, offset + 4, bigEndian)
  }
}

function invalid(message) {
  return `Invalid EXIF data: ${message}.`
}

function isBigEndian(buffer) {
  if (buffer[6] === 0x49 && buffer[7] === 0x49)
    return false
  else if (buffer[6] === 0x4d && buffer[7] === 0x4d)
    return true
  else
    throw new Error(invalid('expected byte order marker'))
}
