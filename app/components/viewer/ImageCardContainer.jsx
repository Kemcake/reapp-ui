var AnimatableContainer = require('../touch/AnimatableContainer');
var EasingFunctions = require('../math/EasingFunctions');
var ImageCard = require('./ImageCard');
var React = require('react');

var ImageCardContainer = React.createClass({
  render() {
    var card = this.transferPropsTo(<ImageCard />);
    var pct = (this.props.left - (this.props.index * this.props.width)) / this.props.width;
    var x = this.props.index * this.props.width - this.props.left;
    var z = Math.abs(pct * 200) * -1;
    var yAxis = this.props.left > this.props.index * this.props.width ? 1 : -1;
    var deg = Math.abs(pct * 69);

    return (
      <AnimatableContainer
        className="ImageCardContainer"
        opacity={EasingFunctions.easeOutCubic(1 - Math.abs(pct))}
        rotate={{y: yAxis, deg: deg}}
        translate={{x: x, z: z}}>
        {card}
      </AnimatableContainer>
    );
  }
});

module.exports = ImageCardContainer;