import React from "react";
import { connect } from "react-redux";
import {
  getDate,
  toggleCard,
  getEventData,
  CardType,
  removeRecord,
} from "../../redux/datepickerReducer";
import { AppStateType } from "../../redux/rootReducer";
import { ToggleCardPayload } from "../../redux/datepickerReducer";
import { EventData } from "../../types/types";
import EventCard from "./EventCard";

import "./eventCard.scss";

type MapStatePropsType = {
  eventData: Array<EventData>;
  cardType: CardType;
  touchedDate: Date | null;
  isOpen: boolean;
};

export type MapDispatchPropsType = {
  getDate: (payload: Date) => void;
  toggleCard: (payload: ToggleCardPayload) => void;
  getEventData: (payload: EventData) => void;
  removeRecord: (payload: EventData) => void;
};

export type PropsType = MapDispatchPropsType & MapStatePropsType;

class EventCardContainer extends React.Component<PropsType> {
  render() {
    return (
      <>
        <EventCard
          cardType={this.props.cardType}
          eventData={this.props.eventData}
          touchedDate={this.props.touchedDate}
          isOpen={this.props.isOpen}
          toggleCard={this.props.toggleCard}
          getDate={this.props.getDate}
          getEventData={this.props.getEventData}
          removeRecord={this.props.removeRecord}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    eventData: state.datepicker.eventData,
    cardType: state.datepicker.cardType,
    touchedDate: state.datepicker.touchedDate,
    isOpen: state.datepicker.isOpen,
  };
};

const mapDispatchToProps: MapDispatchPropsType = {
  getDate,
  toggleCard,
  getEventData,
  removeRecord,
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCardContainer);
