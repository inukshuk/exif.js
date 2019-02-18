'use strict'

const {
  readUInt16,
  readUInt32
} = require('./util')

const II = Buffer.from([0x49, 0x49])
const MM = Buffer.from([0x4d, 0x4d])

function header(buffer) {
  let isBigEndian = checkByteOrder(buffer.slice(0, 2))

  if (readUInt16(buffer, 2, isBigEndian) !== 42)
    throw new Error('EXIF: missing TIFF magic 42')

  let ifdOffset = readUInt32(buffer, 4, isBigEndian)
  if (ifdOffset < 8)
    throw new Error('EXIF: bad IFD0 offset')

  return { isBigEndian, ifdOffset }
}

function checkByteOrder(buffer) {
  if (buffer.compare(II) === 0)
    return false
  if (buffer.compare(MM) === 0)
    return true

  throw new Error('EXIF: missing byte order marker')
}

module.exports = {
  header
}
