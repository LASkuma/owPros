import React, { PropTypes, Component } from 'react';

export default class HeroIcon extends Component {
  getImageUrl(id) {
    return `https://d1u1mce87gyfbn.cloudfront.net/game/heroes/${id}.png`;
  }

  getStyle(id) {
    return {
      backgroundImage: `url(${this.getImageUrl(id)})`,
      width: 40,
      height: 40,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }

  render() {
    return (
      <div style={this.getStyle(this.props.id)}></div>
    );
  }
}
