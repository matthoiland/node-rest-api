const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

Given('I define the request data', function(data) {
  const json = data.rowsHash() // Get data table as json
  this.body = json
})

When('I make a {string} request to {string}', function (method, uri) {

  // Get the `id` of the last resource
  if (uri.includes('{id}')) {
    const id = this.httpResponse.data ? 
      this.httpResponse.data.id ||
      this.httpResponse.data[0].id : ''
    uri = uri.replace('{id}', id)
  }

  // Make the http request
  return this.http({ method, uri })
})

Then('the response status code should be {int}', function (code) {
  return expect(this.httpStatusCode).to.equal(code)
})

Then('the response property {string} should exist', function (prop) {
  // Get deep value from object: https://stackoverflow.com/a/43849204/922593
  const value = prop.split('.').reduce((p,c)=>p&&p[c]||null, this.httpResponse)
  return expect(value).to.exist
})

Then('the response property {string} should not exist', function (prop) {
  // Get deep value from object: https://stackoverflow.com/a/43849204/922593
  const value = prop.split('.').reduce((p,c)=>p&&p[c]||null, this.httpResponse)
  return expect(value).to.not.exist
})

Then('the response property {string} should be {string}', function (prop, val) {
  // Get deep value from object: https://stackoverflow.com/a/43849204/922593
  const value = prop.split('.').reduce((p,c)=>p&&p[c]||null, this.httpResponse)
  return expect(value).to.equal(val)
})

Then('the first {string} in the {string} response should be {string}', function (prop, array, val) {
  const item = this.httpResponse[array][0] || {}
  const value = item[prop] || undefined
  return expect(value).to.equal(val)
})