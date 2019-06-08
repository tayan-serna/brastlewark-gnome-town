// @vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  CircularProgress,
  Card,
  CardTitle,
  CardText,
  TextField
} from 'react-md';
import PropTypes from 'prop-types';

// @actions
import { getGnomos } from '../../actions/gnomos';

// @styles
import './index.scss';

class GnomoList extends Component {
  state = {
    filterVal: ''
  };

  componentDidMount() {
    const { gnomos, getGnomos } = this.props;
    if(!gnomos.length) {
      getGnomos();
    }
  }

  handleChange = (val) => {
    this.setState({
      filterVal: val
    });
  }

  render() {
    const { gnomos } = this.props;
    const { filterVal } = this.state;

    return (
      <section className="gnomo-container">
        <h1 className="gnomo-title">Brastlewark Town</h1>
        <TextField
          id="filter"
          className="gnomo-filter"
          onChange={this.handleChange}
          value={filterVal}
          placeholder="Search for a Gnomo"
        />
        <div>
          {
            gnomos.loading
            && <CircularProgress
              className="gnomo-loading"
              id="gnomes-loading"
            />
          }
          {
            gnomos.error
            && <div className="gnomo-error">There was an error</div>
          }
          {
            (
              !gnomos.loading
              && !gnomos.error
              && gnomos.data.length
            ) && (
              <div
                className="gnomo-list"
              >
                {
                  gnomos.data.map(gnomo => (
                    <Card
                      className="gnomo-list__card"
                      key={gnomo.id}
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
                  ))
                }
              </div>
            )
          }
        </div>
      </section>
    );
  }
}

GnomoList.propTypes = {
  gnomos: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({
      age: PropTypes.number,
      friends: PropTypes.arrayOf(PropTypes.string),
      hair_color: PropTypes.string,
      height: PropTypes.number,
      id: PropTypes.number,
      name: PropTypes.string,
      professions: PropTypes.arrayOf(PropTypes.string),
      thumbnail: PropTypes.string,
      weight: PropTypes.number
    }))
  }).isRequired,
  getGnomos: PropTypes.func
}

const mapStateToProps = ({ gnomos }) => ({
  gnomos
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getGnomos
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GnomoList);
