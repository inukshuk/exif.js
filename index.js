'use strict'

const TAGS = require('./src/tags')
const TIFF = require('./src/tiff')
const IFD = require('./src/ifd')

const EXIF = Buffer.from('Exif\0', 'ascii')

exif.defaults = {
  exif: true,
  gpsInfo: true,
  interoperability: true,
  printImageMatching: true,
  strict: false,
  thumbnail: true,
  timezone: 0
}


function exif(buffer, opts = {}) {
  if (buffer.slice(0, 5).compare(EXIF) === 0)
    buffer = buffer.slice(6)

  let { isBigEndian, ifdOffset } = TIFF.header(buffer)
  let meta = {}

  opts = { ...exif.defaults, ...opts }

  if (!opts.strict)
    meta.errors = []

  let ifd = IFD.read(buffer, ifdOffset, isBigEndian, TAGS.EXIF, opts, meta)

  if (opts.thumbnail && meta.next)
    ifd.thumbnail = IFD.read(buffer, meta.next, isBigEndian, TAGS.EXIF, opts, meta)

  for (let type of ['exif', 'interoperability', 'printImageMatching'])
    if (opts[type] && ifd[type])
      ifd[type] = IFD.read(buffer, ifd[type], isBigEndian, TAGS.EXIF, opts, meta)

  if (opts.gpsInfo && ifd.gpsInfo)
    ifd.gpsInfo = IFD.read(buffer, ifd.gpsInfo, isBigEndian, TAGS.GPS, opts)

  ifd.errors = meta.errors

  return ifd
}


module.exports = exif
module.exports.IFD = IFD
