// Test away
import React from 'react';
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import renderer from 'react-test-renderer'
import Dashboard from './Dashboard';

describe("<Dashboard />", () => {
  it("matched snapshot", () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})