'use strict'

const DATE_TAGS = {
  dateTimeOriginal: true,
  dateTimeDigitized: true,
  modifyDate: true
}

module.exports = {
  isDateTag(tag) {
    return DATE_TAGS[tag] === true
  },

  parseDate(string, offset = 0) {
    if (typeof string !== 'string')
      return null

    let match = string.match(/^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})$/)
    if (!match)
      return null

    // To prevent unexpected month change after setUTCMonth()
    let date = new Date(1970, 0, 2)

    date.setUTCFullYear(match[1])
    date.setUTCMonth(match[2] - 1)
    date.setUTCDate(match[3])
    date.setUTCHours(match[4])
    date.setUTCMinutes(match[5])
    date.setUTCSeconds(match[6])
    date.setUTCMilliseconds(0)

    if (offset !== 0)
      date.setUTCMinutes(date.getUTCMinutes() + offset)

    return date
  }
}
