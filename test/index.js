var exif = require('../')
var fs = require('fs')
var assert = require('assert')
var tetons = fs.readFileSync(__dirname + '/data/tetons.exif')
var IMG_0774 = fs.readFileSync(__dirname + '/data/IMG_0774.exif')

describe('exif-reader', function() {
  it('should read tiff and exif data', function() {
    assert.deepEqual(exif(tetons, { thumbnail: true, strict: true }), {
      isBigEndian: true,
      tags: {
        make: 'Canon',
        model: 'Canon EOS D60',
        orientation: 1,
        xResolution: 300,
        yResolution: 300,
        resolutionUnit: 2,
        software: 'Adobe Photoshop CS Windows',
        dateTime: new Date('2006-04-04T22:31:30.000Z'),
        artist: 'Unspecified',
        copyright: 'Unspecified',
        exif_IFD_Pointer: {
          isBigEndian: true,
          tags: {
            exposureTime: 0.03333333333333333,
            fNumber: 19,
            exposureProgram: 2,
            isoSpeedRatings: 100,
            exifVersion: Buffer.from([48, 50, 50, 48]),
            dateTimeOriginal: new Date('2004-06-17T06:47:02.000Z'),
            dateTimeDigitized: new Date('2004-06-17T06:47:02.000Z'),
            componentsConfiguration: Buffer.from([1, 2, 3, 0]),
            compressedBitsPerPixel: 9,
            shutterSpeedValue: 4.906890869140625,
            apertureValue: 8.495849609375,
            exposureBiasValue: 0,
            maxApertureValue: 4.33984375,
            meteringMode: 6,
            flash: 0,
            focalLength: 70,
            userComment: Buffer.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
            flashpixVersion: Buffer.from([48, 49, 48, 48]),
            colorSpace: 1,
            pixelXDimension: 1600,
            pixelYDimension: 1195,
            focalPlaneXResolution: 3443.946188340807,
            focalPlaneYResolution: 3442.016806722689,
            focalPlaneResolutionUnit: 2,
            sensingMethod: 2,
            fileSource: Buffer.from([3]),
            customRendered: 0,
            exposureMode: 0,
            whiteBalance: 0,
            sceneCaptureType: 0
          }
        }
      },
      thumbnail: {
        isBigEndian: true,
        tags: {
          compression: 6,
          xResolution: 72,
          yResolution: 72,
          resolutionUnit: 2,
          thumbnailOffset: 1102,
          thumbnailLength: 7050
        }
      }
    })
  })

  it('should read gps data and other exif data', function() {
    assert.deepEqual(exif(IMG_0774, { strict: true }), {
      isBigEndian: true,
      tags: {
        make: 'Apple',
        model: 'iPhone 6',
        orientation: 1,
        xResolution: 72,
        yResolution: 72,
        resolutionUnit: 2,
        software: 'Photos 1.0',
        dateTime: new Date('2015-02-28T17:13:57.000Z'),
        exif_IFD_Pointer: {
          isBigEndian: true,
          tags: {
            exposureTime: 0.0020491803278688526,
            fNumber: 2.2,
            exposureProgram: 2,
            isoSpeedRatings: 32,
            exifVersion: Buffer.from([48, 50, 50, 49]),
            dateTimeOriginal: new Date('2015-02-28T17:13:57.000Z'),
            dateTimeDigitized: new Date('2015-02-28T17:13:57.000Z'),
            componentsConfiguration: Buffer.from([1, 2, 3, 0]),
            shutterSpeedValue: 8.930864197530864,
            apertureValue: 2.2750072066878064,
            brightnessValue: 7.991,
            exposureBiasValue: 0,
            meteringMode: 3,
            flash: 16,
            focalLength: 4.15,
            subjectArea: [ 964, 1287, 610, 612 ],
            makerNote: Buffer.from([65, 112, 112, 108, 101, 32, 105, 79, 83, 0, 0, 1, 77, 77, 0, 8, 0, 1, 0, 9, 0, 0, 0, 1, 0, 0, 0, 2, 0, 3, 0, 7, 0, 0, 0, 104, 0, 0, 0, 116, 0, 4, 0, 9, 0, 0, 0, 1, 0, 0, 0, 1, 0, 5, 0, 9, 0, 0, 0, 1, 0, 0, 0, 128, 0, 6, 0, 9, 0, 0, 0, 1, 0, 0, 0, 130, 0, 7, 0, 9, 0, 0, 0, 1, 0, 0, 0, 1, 0, 8, 0, 10, 0, 0, 0, 3, 0, 0, 0, 220, 0, 14, 0, 9, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 98, 112, 108, 105, 115, 116, 48, 48, 212, 1, 2, 3, 4, 5, 6, 7, 8, 85, 102, 108, 97, 103, 115, 85, 118, 97, 108, 117, 101, 85, 101, 112, 111, 99, 104, 89, 116, 105, 109, 101, 115, 99, 97, 108, 101, 16, 1, 19, 0, 3, 205, 166, 44, 254, 105, 204, 16, 0, 18, 59, 154, 202, 0, 8, 17, 23, 29, 35, 45, 47, 56, 58, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 12, 100, 0, 0, 12, 129, 255, 255, 255, 137, 0, 0, 56, 136, 255, 255, 250, 212, 0, 0, 143, 129]),
            subSecTimeOriginal: '476',
            subSecTimeDigitized: '476',
            flashpixVersion: Buffer.from([48, 49, 48, 48]),
            colorSpace: 1,
            pixelXDimension: 3264,
            pixelYDimension: 2448,
            sensingMethod: 2,
            sceneType: Buffer.from([1]),
            exposureMode: 0,
            whiteBalance: 0,
            focalLengthIn35mmFilm: 29,
            sceneCaptureType: 0,
            lensSpecification: [ 4.15, 4.15, 2.2, 2.2 ],
            lensMake: 'Apple',
            lensModel: 'iPhone 6 back camera 4.15mm f/2.2'
          }
        },
        gpsInfo_IFD_Pointer: {
          isBigEndian: true,
          tags: {
            gpsLatitudeRef: 'N',
            gpsLatitude: [ 35, 18, 1.49 ],
            gpsLongitudeRef: 'W',
            gpsLongitude: [ 120, 39, 44.23 ],
            gpsAltitudeRef: 0,
            gpsAltitude: 97,
            gpsTimeStamp: [ 1, 13, 57 ],
            gpsSpeedRef: 'K',
            gpsSpeed: 0,
            gpsImgDirectionRef: 'T',
            gpsImgDirection: 347.4401408450704,
            gpsDestBearingRef: 'T',
            gpsDestBearing: 167.44014084507043,
            gpsDateStamp: '2015:03:01'
          }
        }
      }
    })
  })

  it('should error when missing byte order marker', function() {
    assert.throws(function() {
      exif(Buffer.from('Exif\0\0IM'))
    }, /missing byte order marker/)

    assert.throws(function() {
      exif(Buffer.from('Exif\0\0MI'))
    }, /missing byte order marker/)
  })
})
