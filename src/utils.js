/**
 * Set cookie
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options -> { path, domain, secure }
 *
 * path -> path for cookie
 * domain -> domain for cookie
 * secure -> secure policy
 */
export function setCookie (name, value, options = {}) {
  let expires = options.expires

  if (expires && typeof expires === 'number' && expires instanceof Number) {
    let date = new Date()
    date.setTime(date.getTime() + expires * 1000)
    expires = options.expires = date
    if (expires.toUTCString) {
      options.expires = expires.toUTCString()
    }
  }

  let updatedCookie = `${name}=${encodeURIComponent(value)}`

  for (let propName in options) {
    updatedCookie += `; ${propName}`
    let propValue = options[propName]
    if (propValue !== true) {
      updatedCookie += `=${propValue}`
    }
  }

  document.cookie = updatedCookie
}

/**
 * Get cookie
 *
 * @param {String} name
 */
export function getCookie (name) {
  let matches = document.cookie.match(new RegExp(
    // eslint-disable-next-line
    '(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + '=([^;]*)'
  ))
  return matches ? decodeURIComponent(matches[1]) : null
}

/**
 * Delete cookie
 *
 * @param {String} name
 */
export function deleteCookie (name) {
  void setCookie(name, '', { expires: -1 })
}
