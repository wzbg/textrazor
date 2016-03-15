/* 
* @Author: zyc
* @Date:   2016-02-18 14:06:33
* @Last Modified by:   zyc
* @Last Modified time: 2016-03-15 10:54:42
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
    if (options.text) text = options.text
    const maxLength = options.maxLength || 100000
    const texts = []
    if (text.length < maxLength) {
      texts.push(text)
    } else {
      let tmpText = ''
      for (let content of text.split(' ')) {
        tmpText += content + ' '
        if (tmpText.length > maxLength) {
          texts.push(tmpText)
          tmpText = ''
        }
      }
      if (tmpText) texts.push(tmpText)
    }
    return new Promise((resolve, reject) => {
      Promise.all(texts.map(text => {
        options.text = text
        return this.textrazor(options)
      })).then(results => {
        let json
        for (let data of results) {
          if (json) {
            for (let entity of data.response.entities) {
              json.response.entities.push(entity)
            }
          } else {
            json = data
          }
        }
        resolve(json)
      }).catch(err => reject(err))
    })
  }

  textrazor(options) {
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