module.exports = {
  // Buffer reading helpers to help switching between endianness
  readUInt16(buffer, offset, bigEndian) {
    return (bigEndian) ?
      buffer.readUInt16BE(offset) :
      buffer.readUInt16LE(offset)
  },

  readUInt32(buffer, offset, bigEndian) {
    return (bigEndian) ?
      buffer.readUInt32BE(offset) :
      buffer.readUInt32LE(offset)
  },

  readInt16(buffer, offset, bigEndian) {
    return (bigEndian) ?
      buffer.readInt16BE(offset) :
      buffer.readInt16LE(offset)
  },

  readInt32(buffer, offset, bigEndian) {
    return (bigEndian) ?
      buffer.readInt32BE(offset) :
      buffer.readInt32LE(offset)
  }
}
