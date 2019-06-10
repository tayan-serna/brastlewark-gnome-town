// @vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  CircularProgress,
  TextField
} from 'react-md';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

// @components
import GnomoVisibilitySensor from '../../components/gnomoVisibilitySensor';
import Gnomo from '../../components/gnomo';

// @actions
import { getGnomos } from '../../actions/gnomos';

// @styles
import './index.scss';

export class GnomoList extends Component {
  state = {
    filterVal: '',
    gnomosList: this.props.gnomos.data
  };

  componentDidMount() {
    const { gnomos, getGnomos } = this.props;
    if(!gnomos.length) {
      getGnomos();
    }
  }

  componentDidUpdate(prevProps) {
    const { gnomos } = this.props;
    if (JSON.stringify(prevProps.gnomos.data) !== JSON.stringify(gnomos.data)) {
      this.setState({
        gnomosList: this.props.gnomos.data
      });
    }
  }

  handleChange = (val) => {
    const filteredGnomes = this.props.gnomos.data.filter(
      gnomo => gnomo.name.toLowerCase().includes(val.toLowerCase())
    );

    this.setState({
      filterVal: val,
      gnomosList: !val ? this.props.gnomos.data : filteredGnomes
    });
  }

  render() {
    const { gnomos } = this.props;
    const { filterVal, gnomosList } = this.state;

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
        <div
          className="gnomo-list"
        >
          {
            gnomos.loading
            && <CircularProgress
              className="gnomo-loading"
              id="gnomes-loading"
            />
          }
          {
            gnomos.error
            && <div className="gnomo-error">There was an error, please try again</div>
          }
          {
            (
              !gnomos.loading
              && !gnomos.error
              && gnomos.data.length
            ) && gnomosList.map(gnomo => {
              return (
                      <Gnomo
                        gnomo={gnomo}
                        key={gnomo.id}
                      />
                )
            })
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
