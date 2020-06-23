const jsdom = require("jsdom")
const { JSDOM } = jsdom

const window = new JSDOM(`<!DOCTYPE html><h1>Hello world</h1>`).window
console.log(window.document.querySelector("h1").textContent)
