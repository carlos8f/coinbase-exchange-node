var assert = require('assert');

var CoinbaseExchange = require('../index.js');
var websocketClient = new CoinbaseExchange.WebsocketClient();

test('streams messages', function(done) {
  this.timeout(60000);

  var messages = 0

  websocketClient.on('message', function (message) {
    assert(message)
    messages++
  })

  setTimeout(function () {
    assert(messages > 0)
    websocketClient.on('close', done)
    websocketClient.disconnect()
  }, 10000)
});

test('client 2', function(done) {
  this.timeout(60000);

  var messages = 0

  websocketClient = new CoinbaseExchange.WebsocketClient()

  websocketClient.on('message', function (message) {
    assert(message)
    messages++
  })

  setTimeout(function () {
    assert(messages > 0)
    websocketClient.on('close', done)
    websocketClient.disconnect()
  }, 30000)
});
