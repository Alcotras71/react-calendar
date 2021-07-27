import React from "react";
import Preloader from "./Preloader";

describe("Preloader component", () => {
  it("should render Preloader component", () => {
    const component = shallow(<Preloader />);
    expect(component).toMatchSnapshot();
  });
});
