const MunrosListView = require('./views/munros_list_view');
const Munros = require('./models/munros.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munrosListView = new MunrosListView();
  munrosListView.bindEvents();

  const selectElement = document.querySelector('.region-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const munros = new Munros();
  munros.bindEvents();


})
