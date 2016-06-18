'use strict'

const TextRazor = require('./../index')
const assert =  require('assert')
const nock = require('nock')

const textRazor = new TextRazor('DUMMY_API_KEY')
const textRazorScope = nock('https://api.textrazor.com', {
	reqheaders: {
		'x-textrazor-key': /^DUMMY_API_KEY$/
	}
})

const contents = [
	'The Great Gatsby 了不起的盖茨比'
]

describe('textrazor', function(){
	this.timeout(20000)
	it('exposes an exec method of arity 2', () => {
		assert(typeof textRazor.exec === 'function')
		assert(textRazor.exec.length, 2)
	})
	it('calls the textrazor API and resolves the returned promise with the given response', () => {
		textRazorScope
			.post('/')
			.reply(200, require('./fixtures/response'))
		return textRazor
			.exec(contents[0], { languageOverride: 'eng' })
			.then(function(result){
				assert(result.response)
			})
	})
	it('correctly propagates erroneous responses', () => {
		textRazorScope
			.post('/')
			.reply(500, {ok: false})
		return textRazor
			.exec(contents[0])
			.catch(function(err){
				assert(!err.ok)
			})
	})
})
