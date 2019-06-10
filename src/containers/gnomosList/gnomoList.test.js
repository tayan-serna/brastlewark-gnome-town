import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { GnomoList } from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('gnomoList container', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <GnomoList
        gnomos={{
          data: [],
          loading: false,
          error: false
        }}
        getGnomos={() => {}}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the loading', () => {
    const wrapper = shallow(
      <GnomoList
        gnomos={{
          data: [],
          loading: true,
          error: false
        }}
        getGnomos={() => {}}
      />
    );

    expect(wrapper.find('.gnomo-loading')).toHaveLength(1)
  });

  it('renders the error', () => {
    const wrapper = shallow(
      <GnomoList
        gnomos={{
          data: [],
          loading: false,
          error: true
        }}
        getGnomos={() => {}}
      />
    );

    expect(wrapper.find('.gnomo-error')).toHaveLength(1)
  });
});
