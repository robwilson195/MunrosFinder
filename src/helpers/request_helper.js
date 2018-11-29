const RequestHelper = function (url) {
  this.url = url
}

RequestHelper.prototype.get = function () {
  //fecthes uri reponse and accepts data for deserialisation to json
 return fetch(this.url).then((response) => response.json());
};

module.exports = RequestHelper;
