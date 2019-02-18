'use strict'

module.exports = {
  readString(buffer, offset, length) {
    let string = buffer.toString('ascii', offset, offset + length)
    return (string[string.length - 1] === '\0') ?
      string.slice(0, -1) :
      string
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
