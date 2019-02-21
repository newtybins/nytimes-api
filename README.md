[![](https://img.shields.io/github/stars/jsmiith/nytimes-api.svg?color=yellow&label=Stargazers&logo=github&style=for-the-badge)]()
[![](https://img.shields.io/github/watchers/jsmiith/nytimes-api.svg?color=yellow&label=Watchers&logo=github&style=for-the-badge)]()
[![](https://img.shields.io/npm/v/nytimes-api.svg?color=red&label=Version&style=for-the-badge)](https://npmjs.com/package/nytimes-api)

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
popular.mostEmailed(data => console.log(data[0]));
```

#### Most Viewed

```js
const { Popular } = require('nytimes-api'); // get the Popular class from the nytimes-api package.
const popular = new Popular('your-super-secret-api-key'); // initiate the popular class.

// Get the most viewed article
popular.mostViewed(data => console.log(data[0]));
```

#### Most Shared

```js
const { Popular } = require('nytimes-api'); // get the Popular class from the nytimes-api package.
const popular = new Popular('your-super-secret-api-key'); // initiate the Popular class.

// Get the most viewed article
popular.mostViewed(data => console.log(data[0]));
```

### Movies API

#### All Critics

```js
const { Movies } = require('nytimes-api'); // get the Movies class from the nytimes-api package.
const movies = new Movies('your-super-secret-api-key'); // initiate Movies class.

// Get all of NY Times' critics
movies.allCritics(data => console.log(data));
```

#### Critic's Pick

```js
const { Movies } = require('nytimes-api'); // get the Movies class from the nytimes-api package.
const movies = new Movies('your-super-secret-api-key'); // initiate Movies class.

// Get the NY Times' Critic's Pick
movies.criticsPick(data => console.log(data[0]));
```

#### Search Critics

```js
const { Movies } = require('nytimes-api'); // get the Movies class from the nytimes-api package.
const movies = new Movies('your-super-secret-api-key'); // initiate Movies class.

// Search for a Critic (in this case, Ben Kenigsberg)
movies.searchCritics('Ben Kenigsberg', data => console.log(data));
```

#### Search Reviews

```js
const { Movies } = require('nytimes-api'); // get the Movies class from the nytimes-api package.
const movies = new Movies('your-super-secret-api-key'); // initiate Movies class.

// Search for a movie Review (in this case, "The Terminator")
movies.searchReviews('The Terminator', data => console.log(data));
```
