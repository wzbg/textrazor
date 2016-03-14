/* 
* @Author: zyc
* @Date:   2016-02-18 14:06:33
* @Last Modified by:   zyc
* @Last Modified time: 2016-03-14 17:57:32
*/
'use strict'

const request = require('request')

const url = 'http://api.textrazor.com'

module.exports = class {
  constructor(apiKey, headers) {
    if (typeof apiKey === 'object') headers = apiKey
    this.headers = headers = headers || {}
    if (!headers['x-textrazor-key']) headers['x-textrazor-key'] = apiKey
    if (!headers['Content-Type']) headers['Content-Type'] = 'text/html'
    this.apiKey = headers['x-textrazor-key']
  }
  exec(text, options) {
    if (typeof text === 'object') options = text
    options = options || {}
    options.extractors = options.extractors || 'entities'
    if (!options.text) options.text = text
    return new Promise((resolve, reject) => {
      request.post(url, { headers: this.headers, form: options }, (err, resp, body) => {
        if (err) return reject(err)
        try {
          const json = JSON.parse(body)
          if (resp.statusCode === 200) {
            resolve(json)
          } else {
            json.code = resp.statusCode
            json.key = this.apiKey
            reject(json)
          }
        } catch (err) {
          reject(err)
        }
      })
    })
  }
}