const request = require('request');

const popularUri = 'http://api.nytimes.com/svc/mostpopular/v2';

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
