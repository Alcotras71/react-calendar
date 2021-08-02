import React from "react";
import EventList from "./EventList";

import { toggleCard, removeRecord } from "../../../redux/datepickerReducer";
import { mockEventData } from "../../../../__mocks__/mock";

describe("EventList component", () => {
  const setUp = (props) => shallow(<EventList {...props} />);

  describe("render EventList", () => {
    it("render EventList without props", () => {
      const component = setUp();
      expect(component).toMatchSnapshot();
    });

    it("render EventList with props", () => {
      const component = setUp({
        pickedData: mockEventData.eventDataArr,
        toggleCard,
        removeRecord,
      });
      expect(component).toMatchSnapshot();
    });
  });

  describe('check EventList functions', () => {
    
  })
});
