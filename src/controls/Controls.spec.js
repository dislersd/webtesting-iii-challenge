import React from "react";
import ReactDOM from "react-dom";
import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import renderer from "react-test-renderer";
import Controls from "./Controls";
import { render, cleanup } from "react-testing-library";
import { fireEvent } from "react-testing-library/dist";

afterEach(cleanup);

describe("<Controls /> Snapshot", () => {
  it("matched snapshot", () => {
    const tree = renderer.create(<Controls />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("<Controls />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Controls />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Renders Sucessfully", () => {
    render(<Controls />);
  });
  it("open-button fires a callback on click", () => {
    const banana = jest.fn();
    const { getByTestId } = render(<Controls toggleClosed={banana}/>);
    fireEvent.click(getByTestId('openButton'))
    expect(banana).toHaveBeenCalled();
    expect(banana).toHaveBeenCalledTimes(1);
  });
  it("open-button fires a callback on click", () => {
    const mock = jest.fn();
    const { getByTestId, debug } = render(<Controls toggleClosed={mock}/>);
    fireEvent.click(getByTestId('openButton'))
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
  });
  it("Renders the control panel div", () => {
    const {getByTestId} = render(<Controls />);
    const controlPanel = getByTestId('controlPanel')
    expect(controlPanel).toBeDefined();
  })
});