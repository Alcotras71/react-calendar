import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import {
  toggleCard,
  getDate,
  getEventData,
  CardType,
} from "../../redux/datepickerReducer";
import EventList from "./EventList";
import { compose } from "redux";
import WithCardTemplate from "../../hoc/WithCardTemplate";
import { EventData } from "../../types/types";

type MapStatePropsType = {
  eventData: Array<EventData>;
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
    eventData: state.datepicker.eventData,
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
)(EventList);
