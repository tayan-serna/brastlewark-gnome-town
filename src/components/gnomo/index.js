// @vendors
import React, { Component } from 'react';
import {
  Card,
  CardTitle,
  CardText
} from 'react-md';
import PropTypes from 'prop-types';
import handleViewport from 'react-in-viewport';

class Gnomo extends Component {
  render() {
    const { gnomo } = this.props;

    return (
      <Card
        className="gnomo-list__card"
      >
        <CardTitle
          className="gnomo-list__title"
          title={gnomo.name}
        />
        <CardText
          className="gnomo-list__info"
        >
          <img
            alt={`${gnomo.name}`}
            className="gnomo-list__image"
            src={gnomo.thumbnail}
          />
          <div
            className="gnomo-list__first-column"
          >
            <div
              className="gnomo-list__name"
            >
              <strong>Age: </strong> {gnomo.age}
            </div>
            <div
              className="gnomo-list__hair"
            >
              <strong>Hair: </strong>
              {gnomo.hair_color}
            </div>
            <div
              className="gnomo-list__weight"
            >
              <strong>Weight: </strong>
              {gnomo.weight}
            </div>
            <div
              className="gnomo-list__height"
            >
              <strong>Height: </strong>
              {gnomo.height}
            </div>
          </div>
          <div
            className="gnomo-list__second-column"
          >
            {
              !!gnomo.friends.length && (
                <div
                  className="gnomo-list__friend"
                >
                  <strong>Friends: </strong>
                  <ul>
                    {
                      gnomo.friends.map((friend, key) => (
                        <li key={key}>{friend}</li>
                      ))
                    }
                  </ul>
                </div>
              )
            }
            {
              !!gnomo.professions.length && (
                <div
                  className="gnomo-list__profession"
                >
                  <strong>Professions: </strong>
                  <ul>
                    {
                      gnomo.professions.map((profession, key) => (
                        <li key={key}>{profession}</li>
                      ))
                    }
                  </ul>
                </div>
              )
            }
          </div>
        </CardText>
      </Card>
    );
  }
}

Gnomo.propTypes = {
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

export default Gnomo;
