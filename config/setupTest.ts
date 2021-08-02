import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import toJson from "enzyme-to-json";

// React 17 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// @ts-ignore
global.shallow = shallow;
// @ts-ignore
global.render = render;
// @ts-ignore
global.mount = mount;
// @ts-ignore
global.toJson = toJson;

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
// @ts-ignore
global.localStorage = localStorageMock;

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};
