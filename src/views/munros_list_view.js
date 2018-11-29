const PubSub = require('../helpers/pub_sub');

const MunrosListView = function () {
}

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munros-ready', (event) => {
    const allMunroes = event.detail;
    console.log(allMunroes);
  })
};

module.exports = MunrosListView;
