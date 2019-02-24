import renderer from 'react-test-renderer';
import React from 'react';
import Routes from '..';

describe('Routes', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Routes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
