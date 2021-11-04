import React from "react";
import ReactDom from "react-dom";
import Installed from "../Installed";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const Box = document.createElement("Box");
  ReactDom.render(<Installed></Installed>, Box);
});

it("matches snapshort", () => {
  const tree = renderer.create(<Installed></Installed>).toJSON();
  expect(tree).toMatchSnapshot();
});
