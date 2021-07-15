import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";

// React 17 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};
