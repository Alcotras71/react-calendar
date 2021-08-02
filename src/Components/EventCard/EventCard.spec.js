import "jsdom-global/register";
import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import ConnectedEventCard, { EventCard } from "./EventCardContainer";

import { mockEventData } from "../../../__mocks__/mock";
import {
  getEventData,
  GET_EVENT_DATA,
  toggleCard,
  TOGGLE_CARD,
} from "../../redux/datepickerReducer";

describe("EventCard component", () => {
  const setUp = (props) => shallow(<EventCard {...props} />);
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("render EventCard with props", () => {
    component = setUp({
      eventData: mockEventData.eventDataArr,
      touchedDate: mockEventData.eventData.touchedDate,
      isOpen: true,
      cardType: "eventList",
    });
    expect(component).toMatchSnapshot();
  });

  it("render EventCard without props", () => {
    expect(component).toMatchSnapshot();
  });

  it("render the DUMB component", () => {
    expect(component.length).toEqual(1);
  });
});

describe("Connected EventCard component", () => {
  const initialState = {
    datepicker: {
      eventData: mockEventData.eventDataArr,
      cardType: "eventList",
      touchedDate: mockEventData.eventData.touchedDate,
      isOpen: false,
    },
  };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <ConnectedEventCard />
      </Provider>
    );
  });

  it("+++ render the connected(SMART) component", () => {
    expect(wrapper.find(ConnectedEventCard).length).toEqual(1);
  });

  it("+++ check Prop matches with initialState", () => {
    expect(wrapper.find(EventCard).prop("isOpen")).toEqual(
      initialState.datepicker.isOpen
    );
  });

  it("+++ check action on dispatching ", () => {
    let action;
    store.dispatch(toggleCard({ isOpen: true, cardType: "eventList" }));
    store.dispatch(getEventData(mockEventData.eventData2));
    action = store.getActions();
    expect(action[0].type).toBe(TOGGLE_CARD);
    expect(action[1].type).toBe(GET_EVENT_DATA);
  });
});
