import React from "react";
import { EventData } from "../types/types";
import { returnFilteredDates } from "../utils/helpers/date-helpers";
import { updateObjectInArray } from "../utils/helpers/object-helpers";

const enum actions {
  GET_DATE = "datepicker/GET_DATE",
  GET_EVENT_DATA = "datepicker/GET_EVENT_DATA",
  TOGGLE_CARD = "datepicker/TOGGLE_CARD",
  REMOVE_RECORD = "datepicker/REMOVE_RECORD",
}

export type CardType = "eventForm" | "eventList";

export const initialState = {
  touchedDate: null as Date | null,
  isOpen: false as boolean,
  eventData: localStorage.getItem("eventData")
    ? JSON.parse(localStorage.getItem("eventData") as string)
    : ([] as Array<EventData>),
  cardType: "eventList" as CardType,
};

export type DatepickerStateType = typeof initialState;

export const datepickerReducer = (
  state = initialState,
  action: ActionsTypes
): DatepickerStateType => {
  switch (action.type) {
    case actions.GET_DATE:
      return {
        ...state,
        touchedDate: action.payload,
      };

    case actions.TOGGLE_CARD:
      return {
        ...state,
        isOpen: action.payload.isOpen,
        cardType: action.payload.cardType,
      };

    case actions.GET_EVENT_DATA:
      return {
        ...state,
        eventData: updateObjectInArray(state.eventData, action.payload),
      };

    case actions.REMOVE_RECORD:
      return {
        ...state,
        eventData: returnFilteredDates(state.eventData, action.payload),
      };

    default:
      return state;
  }
};

type ActionsTypes = GetDate | ToggleCard | GetEventData | RemoveRecord;
//--------------------

//--------------------
type GetDate = {
  type: actions.GET_DATE;
  payload: Date;
};
export const getDate = (payload: Date): GetDate => ({
  type: actions.GET_DATE,
  payload,
});
//--------------------
export type ToggleCardPayload = {
  isOpen: boolean;
  cardType: CardType;
};
type ToggleCard = {
  type: actions.TOGGLE_CARD;
  payload: ToggleCardPayload;
};
export const toggleCard = (payload: ToggleCardPayload): ToggleCard => ({
  type: actions.TOGGLE_CARD,
  payload,
});
//--------------------
type GetEventData = {
  type: actions.GET_EVENT_DATA;
  payload: EventData;
};
export const getEventData = (payload: EventData): GetEventData => ({
  type: actions.GET_EVENT_DATA,
  payload,
});
//--------------------
type RemoveRecord = {
  type: actions.REMOVE_RECORD;
  payload: EventData;
};
export const removeRecord = (payload: EventData): RemoveRecord => ({
  type: actions.REMOVE_RECORD,
  payload,
});

export default datepickerReducer;
