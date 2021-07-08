import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import { EventData } from "../../types/types";
import {
  toggleCard,
  getDate,
  getEventData,
  CardType,
} from "../../redux/datepickerReducer";
import EventForm from "./EventForm";
import { compose } from "redux";
import WithCardTemplate from "../../hoc/WithCardTemplate";

type MapStatePropsType = {
  touchedDate: Date | null;
  cardType: CardType;
};

type MapDispatchPropsType = {
  toggleCard: (payload: boolean) => void;
  getDate: (payload: Date) => void;
  getEventData: (payload: EventData) => void;
};

export type PropsType = MapDispatchPropsType & MapStatePropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    touchedDate: state.datepicker.touchedDate,
    cardType: state.datepicker.cardType,
  };
};

export default compose<ComponentType>(
  connect(mapStateToProps, {
    toggleCard,
    getDate,
    getEventData,
  }),
  WithCardTemplate
)(EventForm);
