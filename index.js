const request = require('request');

const popularUri = 'http://api.nytimes.com/svc/mostpopular/v2';
const movieUri = 'http://api.nytimes.com/svc/movies/v2';

class Popular {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  _sendRequest(type, callback) {
    const url = `${popularUri}/${type}/all-sections/7?api-key=${this.apiKey}`;

    request(url, function(error, response, body) {
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

    request(url, function(error, response, body) {
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

    request(url, function(error, response, body) {
      if (!error & (response.statusCode == 200)) {
        callback(JSON.parse(body).results[0]);
      }
    });
  }
}
