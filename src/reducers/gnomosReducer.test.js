import {
  GET_GNOMOS_REQUEST,
  GET_GNOMOS_SUCCESS,
  GET_GNOMOS_FAILURE
} from '../constants';

import gnomosReducer, { initialState } from './gnomosReducer';

describe('gnomosReducer', () => {
  it('should return default state', () => {
    const result = gnomosReducer(
      undefined,
      {
        type: null
      }
    );

    expect(result).toEqual(initialState);
  });

  it('should return request payload', () => {
    const result = gnomosReducer(
      undefined,
      {
        type: GET_GNOMOS_REQUEST
      }
    );

    const expectedResult = {
      data: [],
      loading: true,
      error: false
    };

    expect(result).toEqual(expectedResult);
  });

  it('should return a success payload', () => {
    const result = gnomosReducer(
      undefined,
      {
        type: GET_GNOMOS_SUCCESS,
        payload: [
          { id: 1, name: 'Gnome1' },
          { id: 2, name: 'Gnome2' },
          { id: 3, name: 'Gnome3' }
        ]
      }
    );

    const expectedResult = {
      data: [
        { id: 1, name: 'Gnome1' },
        { id: 2, name: 'Gnome2' },
        { id: 3, name: 'Gnome3' }
      ],
      loading: false,
      error: false
    };

    expect(result).toEqual(expectedResult);
  });

  it('should return a failure payload', () => {
    const result = gnomosReducer(
      undefined,
      {
        type: GET_GNOMOS_FAILURE
      }
    );

    const expectedResult = {
      data: [],
      loading: false,
      error: true
    };

    expect(result).toEqual(expectedResult);
  });
});
