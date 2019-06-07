// @vendors
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// @actions
import { getGnomos } from '../../actions/gnomos';

class GnomoList extends Component {
  componentDidMount() {
    const { gnomos, getGnomos } = this.props;
    if(!gnomos.length) {
      getGnomos();
    }

    console.log(gnomos);
  }

  render() {
    const { gnomos } = this.props;

    return (
      <section>
        <h1>Gnomos</h1>
        <div>
          <ul>
            {
             gnomos.data.map(gnomo => (
               <li key={gnomo.id}>
                 {
                   gnomo.name
                 }
               </li>
              ))
            }
          </ul>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ gnomos }) => ({
  gnomos
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getGnomos
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GnomoList);
