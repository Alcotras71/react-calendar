import React from "react";
import { mockEventData } from "../../__mocks__/mock";
import {
  datepickerReducer,
  initialState,
  GET_DATE,
  GET_EVENT_DATA,
  TOGGLE_CARD,
  REMOVE_RECORD,
  getDate,
  getEventData,
  toggleCard,
  removeRecord,
} from "./datepickerReducer";

describe("datepickerReducer", () => {
  describe("check reducer work", () => {
    it("returns the initial state", () => {
      expect(datepickerReducer(undefined, {})).toEqual(initialState);
    });

    it("handles get date", () => {
      expect(
        datepickerReducer(initialState, {
          type: GET_DATE,
          payload: "Wed Jul 28 2021 14:04:59 GMT+0300 (Moscow Standard Time)",
        })
      ).toEqual({
        ...initialState,
        touchedDate: "Wed Jul 28 2021 14:04:59 GMT+0300 (Moscow Standard Time)",
      });
    });

    it("handles get event data", () => {
      expect(
        datepickerReducer(initialState, {
          type: GET_EVENT_DATA,
          payload: mockEventData.eventData,
        })
      ).toEqual({
        ...initialState,
        eventData: [mockEventData.eventData],
      });
    });

    it("handles toggle card", () => {
      expect(
        datepickerReducer(initialState, {
          type: TOGGLE_CARD,
          payload: { isOpen: true, cardType: "eventList" },
        })
      ).toEqual({
        ...initialState,
        isOpen: true,
        cardType: "eventList",
      });
    });

    it("handles remove record", () => {
      expect(
        datepickerReducer(
          { ...initialState, eventData: mockEventData.eventDataArr },
          { type: REMOVE_RECORD, payload: mockEventData.eventData }
        )
      ).toEqual({
        ...initialState,
        eventData: [
          {
            touchedDate: "2021-09-27T21:00:00.000Z",
            startTime: "16:00",
            endTime: "18:30",
            eventName: "Loki-moki",
          },
          {
            touchedDate: "2021-07-29T21:00:00.000Z",
            startTime: "9:00",
            endTime: "10:30",
            eventName: "PockMocki",
          },
        ],
      });
    });
  });

  describe("check action creators", () => {
    it("getDate AC", () => {
      expect(
        getDate("Wed Jul 28 2021 14:04:59 GMT+0300 (Moscow Standard Time)")
      ).toStrictEqual({
        type: GET_DATE,
        payload: "Wed Jul 28 2021 14:04:59 GMT+0300 (Moscow Standard Time)",
      });
    });

    it("getEventData AC", () => {
      expect(getEventData(mockEventData.eventData)).toStrictEqual({
        type: GET_EVENT_DATA,
        payload: mockEventData.eventData,
      });
    });

    it("toggleCard AC", () => {
      expect(toggleCard({ isOpen: true, cardType: "eventList" })).toStrictEqual(
        {
          type: TOGGLE_CARD,
          payload: { isOpen: true, cardType: "eventList" },
        }
      );
    });

    it("removeRecord AC", () => {
      expect(removeRecord(mockEventData.eventData)).toStrictEqual({
        type: REMOVE_RECORD,
        payload: mockEventData.eventData,
      });
    });
  });
});
