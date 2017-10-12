// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore } from 'redux'
import { combineReducers } from 'redux'

const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90,
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47,
    },
  ],
}

const productsReducer = function(
  state = [],
  action,
) {
  return state
}
const cartReducer = function(state = [], action) {
  return state
}
const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer,
}
const rootReducer = combineReducers(allReducers)
let store = createStore(rootReducer)
console.log('init state: ', store.getState())

function findArray(arr, cb) {
  const result = []
  const indexArray = []
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      result.push(arr[i])
      indexArray.push(i)
    }
  }
  return { result, indexArray }
}
let arrlist = [21, 4, 5, 6, 7],
  cb = function(ele) {
    return ele % 2 == 0
  }
const { result, indexArray } = findArray(
  arrlist,
  cb,
)
console.log(result)
console.log(indexArray)

const someArr = [1, 2, 3, 4]
const [first, second, third] = someArr
console.log(first)
console.log(second)

var url =
  'https://developer.mozilla.org/en-US/Web/JavaScript'

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(
  url,
)
console.log(parsedURL) // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

var [, protocol, fullhost, fullpath] = parsedURL

console.log(protocol) // "https"

let { length: len } = 'abc' // len = 3
let { toString: s } = 123 // s = Number.prototype.toString
console.log(len)
console.log(s)

let obj = { first: 'Jane', last: 'Doe' }
let { ...xxx } = obj
console.log(xxx)
