# nytimes-api

An API wrapper for the NY Times API!

## Installation

To install nytimes-api, you need to run the following command:

```bash
> npm i --save nytimes-api
```

And from there you can just require it in your Node.js project!

## Examples

### Popular API

#### Most Emailed

```js
const { Popular } = require('nytimes-api'); // get the Popular class from the nytimes-api package.
const popular = new Popular('your-super-secret-api-key'); // initiate the popular class.

// Get the most emailed article
popular.mostEmailed(data => {
  console.log(data[0]); // log the json
});
```

### Most Viewed

```js
const { Popular } = require('nytimes-api'); // get the Popular class from the nytimes-api package.
const popular = new Popular('your-super-secret-api-key'); // initiate the popular class.

// Get the most viewed article
popular.mostViewed(data => {
  console.log(data[0]); // log the json
});
```

## Most Shared

```js
const { Popular } = require('nytimes-api'); // get the Popular class from the nytimes-api package.
const popular = new Popular('your-super-secret-api-key'); // initiate the popular class.

// Get the most viewed article
popular.mostViewed(data => {
  console.log(data[0]); // log the json
});
```
