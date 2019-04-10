import React from 'react';
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import renderer from 'react-test-renderer'
import Display from './Display';
import { render, cleanup } from "react-testing-library";

afterEach(cleanup);

describe("<Display />", () => {
  it("matched snapshot", () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it("initial state is unlocked open", () => {
    const { getByText, debug } = render(<Display />);
    getByText(/Open/i)
    getByText(/Unlocked/i)
    debug();
  })
})