# @desco/quotes-if-text

> Add quotation marks when value is a text

## Install

``` bash
npm install --save @desco/quotes-if-text
```

## Use

``` js
import QuotesIfText from '@desco/quotes-if-text'

// Or in NodeJS
const QuotesIfText = require('@desco/quotes-if-text')

console.log(QuotesIfText(1)) // 1
console.log(QuotesIfText('9')) // 9
console.log(QuotesIfText('Helow')) // "Helow"
console.log(QuotesIfText('World', "'")) // 'World'
console.log(QuotesIfText('Your', '`')) // `Your`
console.log(QuotesIfText('Beautiful', '"')) // "Beautiful"
```