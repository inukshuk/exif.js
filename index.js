'use strict'

const TAGS = require('./src/tags')
const TIFF = require('./src/tiff')
const IFD = require('./src/ifd')
const EXIF = Buffer.from('Exif\0', 'ascii')

function exif(buffer, opts) {
  if (buffer.slice(0, 5).compare(EXIF) === 0)
    buffer = buffer.slice(6)

  let { isBigEndian, ifdOffset } = TIFF.header(buffer)

  let meta = { errors: [] }
  let result = {}

  let ifd0 = IFD.read(buffer, ifdOffset, isBigEndian, TAGS.EXIF, opts, meta)
  result.image = ifd0.tags

  if (meta.errors.length === 0 && meta.next > 0) {
    let ifd1 = IFD.read(buffer, meta.next, isBigEndian, TAGS.EXIF, opts, meta)
    result.thumbnail = ifd1.tags
  }

  if (ifd0.exif)
    result.exif = IFD.read(buffer, ifd0.exif, isBigEndian, TAGS.EXIF, opts).tags

  if (ifd0.gpsInfo)
    result.gps = IFD.read(buffer, ifd0.gpsInfo, isBigEndian, TAGS.GPS, opts).tags

  if (ifd0.interoperability)
    result.interop = IFD.read(buffer, ifd0.interoperability, isBigEndian, TAGS.EXIF, opts).tags

  return result
}


module.exports = exif
module.exports.IFD = IFD
