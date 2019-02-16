/**
 * Comprehensive list of TIFF and Exif tags found on
 * http://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/EXIF.html
 */


exports.exif = {
  0x0001: 'interopIndex',
  0x0002: 'interopVersion',
  0x000B: 'processingSoftware',
  0x00FE: 'subfileType',
  0x00FF: 'oldSubfileType',
  0x0100: 'imageWidth',
  0x0101: 'imageHeight',
  0x0102: 'bitsPerSample',
  0x0103: 'compression',
  0x0106: 'photometricInterpretation',
  0x0107: 'thresholding',
  0x0108: 'cellWidth',
  0x0109: 'cellLength',
  0x010A: 'fillOrder',
  0x010D: 'documentName',
  0x010E: 'imageDescription',
  0x010F: 'make',
  0x0110: 'model',
  0x0111: 'stripOffsets',
  0x0112: 'orientation',
  0x0115: 'samplesPerPixel',
  0x0116: 'rowsPerStrip',
  0x0117: 'stripByteCounts',
  0x0118: 'minSampleValue',
  0x0119: 'maxSampleValue',
  0x011A: 'xResolution',
  0x011B: 'yResolution',
  0x011C: 'planarConfiguration',
  0x011D: 'pageName',
  0x011E: 'xPosition',
  0x011F: 'yPosition',
  0x0120: 'freeOffsets',
  0x0121: 'freeByteCounts',
  0x0122: 'grayResponseUnit',
  0x0123: 'grayResponseCurve',
  0x0124: 't4Options',
  0x0125: 't6Options',
  0x0128: 'resolutionUnit',
  0x0129: 'pageNumber',
  0x012C: 'colorResponseUnit',
  0x012D: 'transferFunction',
  0x0131: 'software',
  0x0132: 'modifyDate',
  0x013B: 'artist',
  0x013C: 'hostComputer',
  0x013D: 'predictor',
  0x013E: 'whitePoint',
  0x013F: 'primaryChromaticities',
  0x0140: 'colorMap',
  0x0141: 'halftoneHints',
  0x0142: 'tileWidth',
  0x0143: 'tileLength',
  0x0144: 'tileOffsets',
  0x0145: 'tileByteCounts',
  0x0146: 'badFaxLines',
  0x0147: 'cleanFaxData',
  0x0148: 'consecutiveBadFaxLines',
  0x014A: 'subIFD',
  0x014C: 'inkSet',
  0x014D: 'inkNames',
  0x014E: 'numberofInks',
  0x0150: 'dotRange',
  0x0151: 'targetPrinter',
  0x0152: 'extraSamples',
  0x0153: 'sampleFormat',
  0x0154: 'sMinSampleValue',
  0x0155: 'sMaxSampleValue',
  0x0156: 'transferRange',
  0x0157: 'clipPath',
  0x0158: 'xClipPathUnits',
  0x0159: 'yClipPathUnits',
  0x015A: 'indexed',
  0x015B: 'jpegTables',
  0x015F: 'oPIProxy',
  0x0190: 'globalParametersIFD',
  0x0191: 'profileType',
  0x0192: 'faxProfile',
  0x0193: 'codingMethods',
  0x0194: 'versionYear',
  0x0195: 'modeNumber',
  0x01B1: 'decode',
  0x01B2: 'defaultImageColor',
  0x01B3: 't82Options',
  0x01B5: 'jpegTables',
  0x0200: 'jpegProc',
  0x0201: 'thumbnailOffset',
  0x0202: 'thumbnailLength',
  0x0203: 'jPEGRestartInterval',
  0x0205: 'jPEGLosslessPredictors',
  0x0206: 'jPEGPointTransforms',
  0x0207: 'jPEGQTables',
  0x0208: 'jPEGDCTables',
  0x0209: 'jPEGACTables',
  0x0211: 'yCbCrCoefficients',
  0x0212: 'yCbCrSubSampling',
  0x0213: 'yCbCrPositioning',
  0x0214: 'referenceBlackWhite',
  0x022F: 'stripRowCounts',
  0x02BC: 'applicationNotes',
  0x03E7: 'usptoMiscellaneous',
  0x1000: 'relatedImageFileFormat',
  0x1001: 'relatedImageWidth',
  0x1002: 'relatedImageHeight',
  0x4746: 'rating',
  0x4747: 'XP_DIP_XML',
  0x4748: 'stitchInfo',
  0x4749: 'ratingPercent',
  0x800D: 'imageID',
  0x80A3: 'wangTag1',
  0x80A4: 'wangAnnotation',
  0x80A5: 'wangTag3',
  0x80A6: 'wangTag4',
  0x80E3: 'matteing',
  0x80E4: 'dataType',
  0x80E5: 'imageDepth',
  0x80E6: 'tileDepth',
  0x827D: 'model2',
  0x828D: 'cfaRepeatPatternDim',
  0x828E: 'cfaPattern2',
  0x828F: 'batteryLevel',
  0x8290: 'kodakIFD',
  0x8298: 'copyright',
  0x829A: 'exposureTime',
  0x829D: 'fNumber',
  0x82A5: 'mdFileTag',
  0x82A6: 'mdScalePixel',
  0x82A7: 'mDColorTable',
  0x82A8: 'mdLabName',
  0x82A9: 'mdSampleInfo',
  0x82AA: 'mdPrepDate',
  0x82AB: 'mdPrepTime',
  0x82AC: 'mdFileUnits',
  0x830E: 'pixelScale',
  0x8335: 'adventScale',
  0x8336: 'adventRevision',
  0x835C: 'UIC1Tag',
  0x835D: 'UIC2Tag',
  0x835E: 'UIC3Tag',
  0x835F: 'UIC4Tag',
  0x83BB: 'IPTC-NAA',
  0x847E: 'intergraphPacketData',
  0x847F: 'intergraphFlagRegisters',
  0x8480: 'intergraphMatrix',
  0x8481: 'iNGRReserved',
  0x8482: 'modelTiePoint',
  0x84E0: 'site',
  0x84E1: 'colorSequence',
  0x84E2: 'iT8Header',
  0x84E3: 'rasterPadding',
  0x84E4: 'bitsPerRunLength',
  0x84E5: 'bitsPerExtendedRunLength',
  0x84E6: 'colorTable',
  0x84E7: 'imageColorIndicator',
  0x84E8: 'backgroundColorIndicator',
  0x84E9: 'imageColorValue',
  0x84EA: 'backgroundColorValue',
  0x84EB: 'pixelIntensityRange',
  0x84EC: 'transparencyIndicator',
  0x84ED: 'colorCharacterization',
  0x84EE: 'hCUsage',
  0x84EF: 'trapIndicator',
  0x84F0: 'cMYKEquivalent',
  0x8546: 'SEMInfo',
  0x8568: 'AFCP_IPTC',
  0x85B8: 'pixelMagicJBIGOptions',
  0x85D8: 'modelTransform',
  0x8602: 'wB_GRGBLevels',
  0x8606: 'leafData',
  0x8649: 'photoshopSettings',
  0x8769: 'exifOffset',
  0x8773: 'ICC_Profile',
  0x877F: 'tIFF_FXExtensions',
  0x8780: 'multiProfiles',
  0x8781: 'sharedData',
  0x8782: 't88Options',
  0x87AC: 'imageLayer',
  0x87AF: 'geoTiffDirectory',
  0x87B0: 'geoTiffDoubleParams',
  0x87B1: 'geoTiffAsciiParams',
  0x8822: 'exposureProgram',
  0x8824: 'spectralSensitivity',
  0x8825: 'gpsInfo',
  0x8827: 'iso',
  0x8828: 'opto-ElectricConvFactor',
  0x8829: 'interlace',
  0x882A: 'timeZoneOffset',
  0x882B: 'selfTimerMode',
  0x8830: 'sensitivityType',
  0x8831: 'standardOutputSensitivity',
  0x8832: 'recommendedExposureIndex',
  0x8833: 'isoSpeed',
  0x8834: 'isoSpeedLatitudeyyy',
  0x8835: 'isoSpeedLatitudezzz',
  0x885C: 'faxRecvParams',
  0x885D: 'faxSubAddress',
  0x885E: 'faxRecvTime',
  0x888A: 'leafSubIFD',
  0x9000: 'exifVersion',
  0x9003: 'dateTimeOriginal',
  0x9004: 'dateTimeDigitized',
  0x9101: 'componentsConfiguration',
  0x9102: 'compressedBitsPerPixel',
  0x9201: 'shutterSpeedValue',
  0x9202: 'apertureValue',
  0x9203: 'brightnessValue',
  0x9204: 'exposureBiasValue',
  0x9205: 'maxApertureValue',
  0x9206: 'subjectDistance',
  0x9207: 'meteringMode',
  0x9208: 'lightSource',
  0x9209: 'flash',
  0x920A: 'focalLength',
  0x920B: 'flashEnergy',
  0x920C: 'spatialFrequencyResponse',
  0x920D: 'noise',
  0x920E: 'focalPlaneXResolution',
  0x920F: 'focalPlaneYResolution',
  0x9210: 'focalPlaneResolutionUnit',
  0x9211: 'imageNumber',
  0x9212: 'securityClassification',
  0x9213: 'imageHistory',
  0x9214: 'subjectArea',
  0x9215: 'exposureIndex',
  0x9216: 'TIFF-EPStandardID',
  0x9217: 'sensingMethod',
  0x923A: 'CIP3DataFile',
  0x923B: 'CIP3Sheet',
  0x923C: 'CIP3Side',
  0x923F: 'stoNits',
  0x927C: 'makerNote',
  0x9286: 'userComment',
  0x9290: 'subSecTime',
  0x9291: 'subSecTimeOriginal',
  0x9292: 'subSecTimeDigitized',
  0x932F: 'mSDocumentText',
  0x9330: 'mSPropertySetStorage',
  0x9331: 'mSDocumentTextPosition',
  0x935C: 'imageSourceData',
  0x9C9B: 'xPTitle',
  0x9C9C: 'xPComment',
  0x9C9D: 'xPAuthor',
  0x9C9E: 'xPKeywords',
  0x9C9F: 'xPSubject',
  0xA000: 'flashpixVersion',
  0xA001: 'colorSpace',
  0xA002: 'pixelXDimension',
  0xA003: 'pixelYDimension',
  0xA004: 'relatedSoundFile',
  0xA005: 'interopOffset',
  0xA20B: 'flashEnergy',
  0xA20C: 'spatialFrequencyResponse',
  0xA20D: 'noise',
  0xA20E: 'focalPlaneXResolution',
  0xA20F: 'focalPlaneYResolution',
  0xA210: 'focalPlaneResolutionUnit',
  0xA211: 'imageNumber',
  0xA212: 'securityClassification',
  0xA213: 'imageHistory',
  0xA214: 'subjectLocation',
  0xA215: 'exposureIndex',
  0xA216: 'TIFF-EPStandardID',
  0xA217: 'sensingMethod',
  0xA300: 'fileSource',
  0xA301: 'sceneType',
  0xA302: 'cfaPattern',
  0xA401: 'customRendered',
  0xA402: 'exposureMode',
  0xA403: 'whiteBalance',
  0xA404: 'digitalZoomRatio',
  0xA405: 'focalLengthIn35mmFormat',
  0xA406: 'sceneCaptureType',
  0xA407: 'gainControl',
  0xA408: 'contrast',
  0xA409: 'saturation',
  0xA40A: 'sharpness',
  0xA40B: 'deviceSettingDescription',
  0xA40C: 'subjectDistanceRange',
  0xA420: 'imageUniqueID',
  0xA430: 'cameraOwnerName',
  0xA431: 'bodySerialNumber',
  0xA432: 'lensSpecification',
  0xA433: 'lensMake',
  0xA434: 'lensModel',
  0xA435: 'lensSerialNumber',
  0xA480: 'gdalMetadata',
  0xA481: 'gdalNoData',
  0xA500: 'gamma',
  0xAFC0: 'expandSoftware',
  0xAFC1: 'expandLens',
  0xAFC2: 'expandFilm',
  0xAFC3: 'expandFilterLens',
  0xAFC4: 'expandScanner',
  0xAFC5: 'expandFlashLamp',
  0xBC01: 'pixelFormat',
  0xBC02: 'transformation',
  0xBC03: 'uncompressed',
  0xBC04: 'imageType',
  0xBC80: 'imageWidth',
  0xBC81: 'imageHeight',
  0xBC82: 'widthResolution',
  0xBC83: 'heightResolution',
  0xBCC0: 'imageOffset',
  0xBCC1: 'imageByteCount',
  0xBCC2: 'alphaOffset',
  0xBCC3: 'alphaByteCount',
  0xBCC4: 'imageDataDiscard',
  0xBCC5: 'alphaDataDiscard',
  0xC427: 'oceScanjobDesc',
  0xC428: 'oceApplicationSelector',
  0xC429: 'oceIDNumber',
  0xC42A: 'oceImageLogic',
  0xC44F: 'annotations',
  0xC4A5: 'printIM',
  0xC580: 'USPTOOriginalContentType',
  0xC612: 'dNGVersion',
  0xC613: 'dNGBackwardVersion',
  0xC614: 'uniqueCameraModel',
  0xC615: 'localizedCameraModel',
  0xC616: 'cfaPlaneColor',
  0xC617: 'cfaLayout',
  0xC618: 'linearizationTable',
  0xC619: 'blackLevelRepeatDim',
  0xC61A: 'blackLevel',
  0xC61B: 'blackLevelDeltaH',
  0xC61C: 'blackLevelDeltaV',
  0xC61D: 'whiteLevel',
  0xC61E: 'defaultScale',
  0xC61F: 'defaultCropOrigin',
  0xC620: 'defaultCropSize',
  0xC621: 'colorMatrix1',
  0xC622: 'colorMatrix2',
  0xC623: 'cameraCalibration1',
  0xC624: 'cameraCalibration2',
  0xC625: 'reductionMatrix1',
  0xC626: 'reductionMatrix2',
  0xC627: 'analogBalance',
  0xC628: 'asShotNeutral',
  0xC629: 'asShotWhiteXY',
  0xC62A: 'baselineExposure',
  0xC62B: 'baselineNoise',
  0xC62C: 'baselineSharpness',
  0xC62D: 'bayerGreenSplit',
  0xC62E: 'linearResponseLimit',
  0xC62F: 'cameraSerialNumber',
  0xC630: 'dngLensInfo',
  0xC631: 'chromaBlurRadius',
  0xC632: 'antiAliasStrength',
  0xC633: 'shadowScale',
  0xC634: 'dngPrivateData',
  0xC635: 'makerNoteSafety',
  0xC640: 'rawImageSegmentation',
  0xC65A: 'calibrationIlluminant1',
  0xC65B: 'calibrationIlluminant2',
  0xC65C: 'bestQualityScale',
  0xC65D: 'rawDataUniqueID',
  0xC660: 'aliasLayerMetadata',
  0xC68B: 'originalRawFileName',
  0xC68C: 'originalRawFileData',
  0xC68D: 'activeArea',
  0xC68E: 'maskedAreas',
  0xC68F: 'asShotICCProfile',
  0xC690: 'asShotPreProfileMatrix',
  0xC691: 'currentICCProfile',
  0xC692: 'currentPreProfileMatrix',
  0xC6BF: 'colorimetricReference',
  0xC6D2: 'panasonicTitle',
  0xC6D3: 'panasonicTitle2',
  0xC6F3: 'cameraCalibrationSig',
  0xC6F4: 'profileCalibrationSig',
  0xC6F5: 'profileIFD',
  0xC6F6: 'asShotProfileName',
  0xC6F7: 'noiseReductionApplied',
  0xC6F8: 'profileName',
  0xC6F9: 'profileHueSatMapDims',
  0xC6FA: 'profileHueSatMapData1',
  0xC6FB: 'profileHueSatMapData2',
  0xC6FC: 'profileToneCurve',
  0xC6FD: 'profileEmbedPolicy',
  0xC6FE: 'profileCopyright',
  0xC714: 'forwardMatrix1',
  0xC715: 'forwardMatrix2',
  0xC716: 'previewApplicationName',
  0xC717: 'previewApplicationVersion',
  0xC718: 'previewSettingsName',
  0xC719: 'previewSettingsDigest',
  0xC71A: 'previewColorSpace',
  0xC71B: 'previewDateTime',
  0xC71C: 'rawImageDigest',
  0xC71D: 'originalRawFileDigest',
  0xC71E: 'subTileBlockSize',
  0xC71F: 'rowInterleaveFactor',
  0xC725: 'profileLookTableDims',
  0xC726: 'profileLookTableData',
  0xC740: 'opcodeList1',
  0xC741: 'opcodeList2',
  0xC74E: 'opcodeList3',
  0xC761: 'noiseProfile',
  0xC763: 'timeCodes',
  0xC764: 'frameRate',
  0xC772: 'tStop',
  0xC789: 'reelName',
  0xC791: 'originalDefaultFinalSize',
  0xC792: 'originalBestQualitySize',
  0xC793: 'originalDefaultCropSize',
  0xC7A1: 'cameraLabel',
  0xC7A3: 'profileHueSatMapEncoding',
  0xC7A4: 'profileLookTableEncoding',
  0xC7A5: 'baselineExposureOffset',
  0xC7A6: 'defaultBlackRender',
  0xC7A7: 'newRawImageDigest',
  0xC7A8: 'rawToPreviewGain',
  0xC7B5: 'defaultUserCrop',
  0xEA1C: 'padding',
  0xEA1D: 'offsetSchema',
  0xFDE8: 'ownerName',
  0xFDE9: 'serialNumber',
  0xFDEA: 'lens',
  0xFE00: 'KDC_IFD',
  0xFE4C: 'rawFile',
  0xFE4D: 'converter',
  0xFE4E: 'whiteBalance',
  0xFE51: 'exposure',
  0xFE52: 'shadows',
  0xFE53: 'brightness',
  0xFE54: 'contrast',
  0xFE55: 'saturation',
  0xFE56: 'sharpness',
  0xFE57: 'smoothness',
  0xFE58: 'moireFilter'
}

exports.gps = {
  0x0000: 'gpsVersionID',
  0x0001: 'gpsLatitudeRef',
  0x0002: 'gpsLatitude',
  0x0003: 'gpsLongitudeRef',
  0x0004: 'gpsLongitude',
  0x0005: 'gpsAltitudeRef',
  0x0006: 'gpsAltitude',
  0x0007: 'gpsTimeStamp',
  0x0008: 'gpsSatellites',
  0x0009: 'gpsStatus',
  0x000A: 'gpsMeasureMode',
  0x000B: 'gpsDOP',
  0x000C: 'gpsSpeedRef',
  0x000D: 'gpsSpeed',
  0x000E: 'gpsTrackRef',
  0x000F: 'gpsTrack',
  0x0010: 'gpsImgDirectionRef',
  0x0011: 'gpsImgDirection',
  0x0012: 'gpsMapDatum',
  0x0013: 'gpsDestLatitudeRef',
  0x0014: 'gpsDestLatitude',
  0x0015: 'gpsDestLongitudeRef',
  0x0016: 'gpsDestLongitude',
  0x0017: 'gpsDestBearingRef',
  0x0018: 'gpsDestBearing',
  0x0019: 'gpsDestDistanceRef',
  0x001A: 'gpsDestDistance',
  0x001B: 'gpsProcessingMethod',
  0x001C: 'gpsAreaInformation',
  0x001D: 'gpsDateStamp',
  0x001E: 'gpsDifferential',
  0x001F: 'gpsHPositioningError'
}
