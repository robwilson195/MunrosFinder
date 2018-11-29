const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Munros =  function() {
  this.munrosData = null;
}

Munros.prototype.bindEvents = function () {
  this.getData();
};

Munros.prototype.getData = function () {
  const url = 'https://munroapi.herokuapp.com/api/munros';
  const requestHelper = new RequestHelper(url);
  requestHelper.get()
  .then((munros) => {
    this.munrosData = munros;
    PubSub.publish('Munros:munros-ready', this.munrosData);
    PubSub.publish('Munros:select-list', this.munrosData);
  })
  .catch((error) => {
    PubSub.publish('Munros:error', error);
  })
};

module.exports = Munros;
