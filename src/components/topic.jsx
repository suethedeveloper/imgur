var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../store/image-store');
var Reflux = require('reflux');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState: function(){
    return {
      images: []
    }
  },
  componentWillMount: function(){
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function(nextProps){
    Actions.getImages(nextProps.params.id);
  },
  render: function(){
    return <div>
      // I am a topic with ID {this.props.params.id}

    </div>
  },
  onChange: function(event, images) {
    this.setState({images: images})
  }
});