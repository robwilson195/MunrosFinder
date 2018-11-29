const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunrosListView = function () {
  this.munroList = null;
}

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munros-ready', (event) => {
    const allMunroes = event.detail;
    this.munroList = allMunroes;
    this.render(allMunroes);
  });
};

MunrosListView.prototype.render = function(munros) {
  const htmlBody = document.querySelector('body');

  const listTitle = document.createElement('h1');
  listTitle.textContent = 'Scottish Munros:';
  htmlBody.appendChild(listTitle);

  const munroList = document.createElement('div');
  munroList.classList.add('munro-list');
  htmlBody.appendChild(munroList);

  this.element = munroList;
  munros.forEach((munro) => {
    const munroView = new MunroView(munro);
    munroView.render(this.element);
  });
};

module.exports = MunrosListView;
