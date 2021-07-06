import React from "react";
import { PickedDate } from "../types/types";
import { updateObjectInArray } from "../utils/helpers/object-helpers";

const GET_DATE = "datepicker/GET_DATE";
const TOGGLE_CARD = "datepicker/TOGGLE_CARD";

const initialState = {
  pickedDate: [] as Array<PickedDate>,
  isOpen: false as boolean,
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
        pickedDate: updateObjectInArray(state.pickedDate, action.payload),
      };

    case TOGGLE_CARD:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

type ActionsTypes = getDate | toggleCard;

type getDate = {
  type: typeof GET_DATE;
  payload: PickedDate;
};

export const getDate = (payload: PickedDate): getDate => ({
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

export default datepickerReducer;
