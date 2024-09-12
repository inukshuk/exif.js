'use strict'

const DATE_TAGS = {
  dateTimeOriginal: 'offsetTimeOriginal',
  dateTimeDigitized: 'offsetTimeDigitized',
  dateTime: 'offsetTime'
}

function parseDate(string, offset) {
  if (typeof string !== 'string')
    return null

  let match = string.match(
    /^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})$/
  )

  if (!match)
    return null

  let date = new Date(Date.UTC(
    match[1],
    match[2] - 1,
    match[3],
    match[4],
    match[5],
    match[6],
    0
  ))

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
