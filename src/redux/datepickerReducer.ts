import React from "react";
import {
  START_DATE,
  FocusedInput,
  OnDatesChangeProps,
} from "@datepicker-react/hooks";

const CHANGE_FOCUS = "datepicker/CHANGE_FOCUSE";
const CHANGE_DATA = "datepicker/CHANGE_DATA";

const initialState = {
  startDate: null as null | Date,
  endDate: null as null | Date,
  focusedInput: START_DATE as FocusedInput,
};

export type DatepickerStateType = typeof initialState;

const datepickerReducer = (
  state = initialState,
  action: ActionsTypes
): DatepickerStateType => {
  switch (action.type) {
    case CHANGE_FOCUS:
      return {
        ...state,
        focusedInput: action.date,
      };
    case CHANGE_DATA:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

type ActionsTypes = ChangeFocus | ChangeData;

export type ChangeFocus = {
  type: typeof CHANGE_FOCUS;
  date: typeof START_DATE;
};

export const changeFocusInput = (date: typeof START_DATE): ChangeFocus => ({
  type: CHANGE_FOCUS,
  date,
});

export type ChangeData = {
  type: typeof CHANGE_DATA;
  data: OnDatesChangeProps
};

export const changeData = ({startDate, endDate, focusedInput}: OnDatesChangeProps): ChangeData => ({
  type: CHANGE_DATA,
  data: {startDate, endDate, focusedInput},
});

export default datepickerReducer;
