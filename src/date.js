'use strict'

const DATE_TAGS = {
  dateTimeOriginal: 'offsetTime',
  dateTimeDigitized: 'offsetTimeOriginal',
  dateTime: 'offsetTimeDigitized'
}

function parseDate(string, offset) {
  if (typeof string !== 'string')
    return null

  let match = string.match(
    /^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})$/
  )

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

  if (offset != null && offset !== 0)
    date.setUTCMinutes(date.getUTCMinutes() + offset)

  return date
}

function parseTimeOffset(string) {
  if (typeof string !== 'string')
    return null

  let match = string.match(/^(\+|-)(\d{2}):(\d{2})$/)

  if (!match)
    return null

  let offset = Number(match[2]) * 60 + Number(match[3])

  return (match[1] === '-') ? -offset : offset
}

module.exports = {
  parseDateValues(tags, timezone) {
    for (let date in DATE_TAGS) {
      let offset = DATE_TAGS[date]

      if (offset in tags)
        tags[offset] = parseTimeOffset(tags[offset])

      if (date in tags)
        tags[date] = parseDate(
          tags[date],
          tags[offset] != null ? tags[offset] : timezone)
    }
  }
}
