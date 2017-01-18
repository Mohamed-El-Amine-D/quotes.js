const quotes = require('./quotes.json')

/** Number of total quotes available */
const count = quotes.length

/** Get a random quote */
const random = () => quotes[Math.floor(Math.random() * 10e3) % quotes.length]

/**
 * Search for quotes
 * @param {RegExp} pattern Regular expression to look for
 */
const search = (pattern) => quotes.filter(quote => new RegExp(pattern).test(quote.quote))

/**
 * Search for quotes in a specific language
 * @param {string} lang language
 */
const filterByLang = (lang = 'ar') => quotes.filter(quote => quote.lang === lang)

/**
 * Search for quotes with some specific tags
 * @param {string|Array} tag An Array or comma separated string of tags
 * @return {Array}
 */
const filterByTag = (tag) => {
  if (Array.isArray(tag))
    tag = tag.join('|')
  else if (typeof tag === 'string')
    tag = tag.replace(',', '|')
  else
    throw new TypeError('Expected string|Array<string>')

  return quotes.filter(quote => new RegExp(tag).test(quote.tags.join(' ')))
}


module.exports = {
  count,
  all: quotes,
  random,
  search,
  filterByLang,
  filterByTag,
}
