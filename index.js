const request = require('request');

const popularUri = 'https://api.nytimes.com/svc/mostpopular/v2';
const movieUri = 'https://api.nytimes.com/svc/movies/v2';
const booksUri = 'https://api.nytimes.com/svc/books/v3';
const topUri = 'http://api.nytimes.com/svc/topstories/v2';

const topSections = [
  'arts',
  'automobiles',
  'books',
  'business',
  'fashion',
  'food',
  'health',
  'home',
  'insider',
  'magazine',
  'movies',
  'national',
  'nyregion',
  'obituaries',
  'opinion',
  'politics',
  'realestate',
  'science',
  'sports',
  'sundayreview',
  'technology',
  'theater',
  'tmagazine',
  'travel',
  'upshot',
  'world'
];

class Popular {
  constructor(apiKey) {
    if (!apiKey) throw new Error('No API Key provided.');

    this.apiKey = apiKey;
  }

  _sendRequest(type, cb) {
    const url = `${popularUri}/${type}/all-sections/7?api-key=${this.apiKey}`;

    request(url, (err, res, body) => {
      if (!err & (res.statusCode === 200)) {
        cb(JSON.parse(body).results);
      }
    });
  }

  mostEmailed(cb) {
    this._sendRequest('mostemailed', cb);
  }

  mostViewed(cb) {
    this._sendRequest('mostviewed', cb);
  }

  mostShared(cb) {
    this._sendRequest('mostshared', cb);
  }
}

class Movies {
  constructor(apiKey) {
    if (!apiKey) throw new Error('No API Key provided.');

    this.apiKey = apiKey;
  }

  _sendRequest(type, type2, cb) {
    const url = `${movieUri}/${type}/${type2}.json?api-key=${this.apiKey}`;

    request(url, (err, res, body) => {
      if (!err & (res.statusCode === 200)) {
        cb(JSON.parse(body).results);
      }
    });
  }

  allCritics(cb) {
    this._sendRequest('critics', 'all', cb);
  }

  criticsPick(cb) {
    this._sendRequest('reviews', 'picks', cb);
  }

  searchCritics(reviewer, cb) {
    this._sendRequest('critics', reviewer, cb);
  }

  searchReviews(query, cb) {
    const url = `${movieUri}/reviews/search.json?query=${query}&api-key=${
      this.apiKey
    }`;

    request(url, (err, res, body) => {
      if (!err & (res.statusCode === 200)) {
        cb(JSON.parse(body).results[0]);
      }
    });
  }
}

class Books {
  constructor(apiKey) {
    if (!apiKey) throw new Error('No API Key provided.');

    this.apiKey = apiKey;
  }

  _sendRequest(type, cb) {
    const url = `${booksUri}/lists/${type}?api-key=${this.apiKey}`;

    request(url, (err, res, body) => {
      if (!err & (res.statusCode === 200)) {
        cb(JSON.parse(body).results);
      }
    });
  }

  bestSellersLists(cb) {
    this._sendRequest('names', cb);
  }

  overview(cb) {
    this._sendRequest('overview', cb);
  }

  bestSellers(list, cb) {
    const url = `${booksUri}/lists.json?list=${list}&api-key=${this.apiKey}`;

    request(url, (err, res, body) => {
      if (!err & (res.statusCode === 200)) {
        cb(JSON.parse(body).results);
      }
    });
  }

  searchReviews(q, cb) {
    const url = `${booksUri}/reviews.json?title=${q}&api-key=${this.apiKey}`;

    request(url, (err, res, body) => {
      if (!err & (res.statusCode === 200)) {
        cb(JSON.parse(body).results);
      }
    });
  }
}

class TopStories {
  constructor(apiKey) {
    if (!apiKey) throw new Error('No API Key provided.');

    this.apiKey = apiKey;
  }

  sections(cb) {
    cb(topSections);
  }

  randomSection(cb) {
    const random = topSections[Math.floor(Math.random() * topSections.length)];
    cb(random);
  }

  topStories(s, cb) {
    const url = `${topUri}/${s}.json?api-key=${this.apiKey}`;

    request(url, (err, res, body) => {
      if (!err & (res.statusCode === 200)) {
        cb(JSON.parse(body).results);
      }
    });
  }
}

module.exports = {
  Popular,
  Movies,
  Books,
  TopStories
};
