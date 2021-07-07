import React from "react";
import { EventData } from "../types/types";
import { updateObjectInArray } from "../utils/helpers/object-helpers";

const GET_DATE = "datepicker/GET_DATE";
const GET_EVENT_DATA = "datepicker/GET_EVENT_DATA";
const TOGGLE_CARD = "datepicker/TOGGLE_CARD";

const initialState = {
  touchedDate: null as Date | null,
  isOpen: false as boolean,
  eventData: [] as Array<EventData>,
};

export type DatepickerStateType = typeof initialState;

const datepickerReducer = (
  state = initialState,
  action: ActionsTypes
): DatepickerStateType => {
  switch (action.type) {
    case GET_DATE:
      return {
        ...state,
        touchedDate: action.payload,
      };

    case TOGGLE_CARD:
      return {
        ...state,
        isOpen: action.payload,
      };

    case GET_EVENT_DATA:
      localStorage.setItem("selectedDates", JSON.stringify(action.payload));

      return {
        ...state,
        eventData: updateObjectInArray(state.eventData, action.payload),
      };

    default:
      return state;
  }
};

type ActionsTypes = getDate | toggleCard | getEventData;

type getDate = {
  type: typeof GET_DATE;
  payload: Date;
};
export const getDate = (payload: Date): getDate => ({
  type: GET_DATE,
  payload,
});

type toggleCard = {
  type: typeof TOGGLE_CARD;
  payload: boolean;
};
export const toggleCard = (payload: boolean): toggleCard => ({
  type: TOGGLE_CARD,
  payload,
});

type getEventData = {
  type: typeof GET_EVENT_DATA;
  payload: EventData;
};
export const getEventData = (payload: EventData): getEventData => ({
  type: GET_EVENT_DATA,
  payload,
});

export default datepickerReducer;
