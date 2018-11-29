const MunrosListView = require('./views/munros_list_view');
const Munros = require('./models/munros.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const munrosListView = new MunrosListView();
  munrosListView.bindEvents();

  const munros = new Munros();
  munros.getData();


})
