const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
  this.munroData = [];
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:select-list', (event) => {
    this.munroData = event.detail;
    this.populate();
  });
};

SelectView.prototype.populate = function () {
  const uniqRegions = this.isolateRegions();
  uniqRegions.forEach((region) => {
    const opt = document.createElement('option');
    opt.textContent = region;
    this.element.appendChild(opt);
  })
};

SelectView.prototype.isolateRegions = function () {
  return this.munroData
  .map((munro) => {
    return munro.region;
  })
  .filter((region, index, regions) => {
    return regions.indexOf(region) === index;
  })
};

module.exports = SelectView;
