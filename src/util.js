'use strict'

const util = module.exports = {
  readString(buffer, offset, length) {
    let string = buffer.toString('ascii', offset, offset + length)
    return (string[string.length - 1] === '\0') ?
      string.slice(0, -1) :
      string
  },

  readValues(buffer, offset, size, count, ...args) {
    let values = []
    for (let i = 0; i < count; i++) {
      values.push(util.readValue(buffer, offset, ...args))
      offset += size
    }
    return values
  },

  readValue(buffer, offset, isBigEndian, type) {
    switch (type) {
    case 1:
      return buffer[offset]
    case 3: // uint16
      return util.readUInt16(buffer, offset, isBigEndian)
    case 4: // uint32
      return util.readUInt32(buffer, offset, isBigEndian)
    case 5: // unsigned rational
      return util.readUInt32(buffer, offset, isBigEndian) /
        util.readUInt32(buffer, offset + 4, isBigEndian)
    case 6: // int8
      return buffer.readInt8(offset)
    case 8: // int16
      return util.readInt16(buffer, offset, isBigEndian)
    case 9: // int32
      return util.readInt32(buffer, offset, isBigEndian)
    case 10: // signed rational
      return util.readInt32(buffer, offset, isBigEndian) /
        util.readInt32(buffer, offset + 4, isBigEndian)
    }
  },

  // Buffer reading helpers to help switching between endianness
  readUInt16(buffer, offset, isBigEndian) {
    return (isBigEndian) ?
      buffer.readUInt16BE(offset) :
      buffer.readUInt16LE(offset)
  },

  readUInt32(buffer, offset, isBigEndian) {
    return (isBigEndian) ?
      buffer.readUInt32BE(offset) :
      buffer.readUInt32LE(offset)
  },

  readInt16(buffer, offset, isBigEndian) {
    return (isBigEndian) ?
      buffer.readInt16BE(offset) :
      buffer.readInt16LE(offset)
  },

  readInt32(buffer, offset, isBigEndian) {
    return (isBigEndian) ?
      buffer.readInt32BE(offset) :
      buffer.readInt32LE(offset)
  }
}
