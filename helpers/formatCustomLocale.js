import dayjs from 'dayjs'

// See: https://github.com/iamkun/dayjs/blob/dev/docs/en/I18n.md
const locale = {
  name: 'custom-locale', // name String
  relativeTime: {
    // relative time format strings, keep %s %d as the same
    future: '%s', // e.g. in 2 hours, %s been replaced with 2hours
    past: '%ss',
    s: '30s',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh', // e.g. 2 hours, %d been replaced with 2
    d: '1d',
    dd: '%dd',
    M: '1m',
    MM: '%dm',
    y: '1y',
    yy: '%dy'
  }
}

dayjs.locale(locale, null, true) // load locale for later use

export default locale
