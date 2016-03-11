/* 
* @Author: zyc
* @Date:   2016-02-18 14:06:33
* @Last Modified by:   zyc
* @Last Modified time: 2016-03-11 17:52:35
*/
'use strict'

const request = require('request')

const url = 'http://api.textrazor.com'

module.exports = class {
  constructor(token, headers) {
    this.headers = headers = headers || {}
    if (!headers['x-textrazor-key']) headers['x-textrazor-key'] = token
    if (!headers['Content-Type']) headers['Content-Type'] = 'text/html'
  }
  exec(text, extractors) {
    extractors = extractors || 'entities'
    return new Promise((resolve, reject) => {
      request.post(url, { headers: this.headers, form: { extractors, text } }, (err, resp, body) => {
        if (err) return reject(err)
        try {
          const json = JSON.parse(body)
          if (resp.statusCode === 200) {
            resolve(json)
          } else {
            reject(json)
          }
        } catch (err) {
          reject(err)
        }
      })
    })
  }
}