import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home.component';

describe('Home Page', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
