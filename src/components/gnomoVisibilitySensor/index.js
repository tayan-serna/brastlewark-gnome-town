// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

import Gnomo from '../gnomo';

class GnomoVisibilitySensor extends Component {
  state = {
    isVisible: false
  }

  onChange = (isVisible) => {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    this.setState({
      isVisible
    });
  }

  render() {
    const { gnomo } = this.props;
    const { isVisible } = this.state;

    return (
      <VisibilitySensor onChange={this.onChange}>
        <Gnomo gnomo={gnomo} isVisible={isVisible}/>
      </VisibilitySensor>
    );
  }
}

GnomoVisibilitySensor.propTypes = {
  gnomo: PropTypes.shape({
    age: PropTypes.number,
    friends: PropTypes.arrayOf(PropTypes.string),
    hair_color: PropTypes.string,
    height: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    professions: PropTypes.arrayOf(PropTypes.string),
    thumbnail: PropTypes.string,
    weight: PropTypes.number
  }).isRequired
};

export default GnomoVisibilitySensor;
