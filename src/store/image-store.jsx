var Reflux = require('reflux');
var Actions = require('../actions');
var Api = require('../utils/api');

module.exports = Reflux.createStore({
  getImages: function(topicId){
    Api.get('topics/' + topicId)
      .then(function(json){
        this.images = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function(){
    this.trigger('change', this.images);
  }
});
