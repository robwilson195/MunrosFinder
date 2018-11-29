//constructor
const MunroView = function(munro) {
  this.munro = munro;
}

MunroView.prototype.render = function (parentElement) {
  const nameElement = document.createElement('h3');
  nameElement.textContent = this.munro.name;
  parentElement.appendChild(nameElement);

  const heightElement = document.createElement('p');
  heightElement.textContent = this.munro.height;
  parentElement.appendChild(heightElement);

  const meaningElement = document.createElement('p');
  meaningElement.textContent = this.munro.meaning;
  parentElement.appendChild(meaningElement);
}

module.exports = MunroView;
