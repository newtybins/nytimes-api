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
    this.apiKey = apiKey;
  }

  _sendRequest(type, callback) {
    const url = `${popularUri}/${type}/all-sections/7?api-key=${this.apiKey}`;

    request(url, (error, response, body) => {
      if (!error & (response.statusCode == 200)) {
        callback(JSON.parse(body).results);
      }
    });
  }

  mostEmailed(callback) {
    this._sendRequest('mostemailed', callback);
  }

  mostViewed(callback) {
    this._sendRequest('mostviewed', callback);
  }

  mostShared(callback) {
    this._sendRequest('mostshared', callback);
  }
}

class Movies {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  allCritics(callback) {
    const url = `${movieUri}/critics/all.json?api-key=${this.apiKey}`;

    request(url, (error, response, body) => {
      if (!error & (response.statusCode == 200)) {
        callback(JSON.parse(body).results);
      }
    });
  }

  criticsPick(callback) {
    const url = `${movieUri}/reviews/picks.json?api-key=${this.apiKey}`;

    request(url, (error, response, body) => {
      if (!error & (response.statusCode == 200)) {
        callback(JSON.parse(body).results);
      }
    });
  }

  searchCritics(reviewer, callback) {
    const url = `${movieUri}/critics/${reviewer}.json?api-key=${this.apiKey}`;

    request(url, (error, response, body) => {
      if (!error & (response.statusCode == 200)) {
        callback(JSON.parse(body).results[0]);
      }
    });
  }

  searchReviews(query, callback) {
    const url = `${movieUri}/reviews/search.json?query=${query}&api-key=${
      this.apiKey
    }`;

    request(url, (error, response, body) => {
      if (!error & (response.statusCode == 200)) {
        callback(JSON.parse(body).results[0]);
      }
    });
  }
}

class Books {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  bestSellersLists(callback) {
    const url = `${booksUri}/lists/names?api-key=${this.apiKey}`;

    request(url, (error, response, body) => {
      if (!error & (response.statusCode == 200)) {
        callback(JSON.parse(body).results);
      }
    });
  }

  bestSellers(list, callback) {
    const url = `${booksUri}/lists.json?list=${list}&api-key=${this.apiKey}`;

    request(url, (error, response, body) => {
      if (!error & (response.statusCode == 200)) {
        callback(JSON.parse(body).results);
      }
    });
  }

  overview(callback) {
    const url = `${booksUri}/lists/overview.json?api-key=${this.apiKey}`;

    request(url, (error, response, body) => {
      if (!error & (response.statusCode == 200)) {
        callback(JSON.parse(body).results);
      }
    });
  }

  searchReviews(query, callback) {
    const url = `${booksUri}/reviews.json?title=${query}&api-key=${
      this.apiKey
    }`;

    request(url, (error, response, body) => {
      if (!error & (response.statusCode == 200)) {
        callback(JSON.parse(body).results);
      }
    });
  }
}

class TopStories {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  sections(callback) {
    callback(topSections);
  }

  randomSection(callback) {
    const random = topSections[Math.floor(Math.random() * topSections.length)];
    callback(random);
  }

  topStories(section, callback) {
    const url = `${topUri}/${section}.json?api-key=${this.apiKey}`;

    request(url, (error, response, body) => {
      if (!error & (response.statusCode == 200)) {
        callback(JSON.parse(body).results);
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
