import React, { ReactNode } from "react";
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
import { returnDescriptionPickedDate } from "../../utils/helpers/date-helpers";
import EventForm from "./EventForm/EventForm";
import EventList from "./EventList/EventList";

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

type OwnProps = {
  children?: ReactNode;
  rest?: any;
};

export type PropsType = MapDispatchPropsType & MapStatePropsType & OwnProps;

export class EventCard extends React.Component<PropsType> {
  render() {
    const pickedData = returnDescriptionPickedDate(
      this.props.eventData,
      this.props.touchedDate
    );

    return (
      <div
        style={this.props.rest}
        className={`event-card ${this.props.isOpen ? "active" : ""}`}
      >
        <div className="event-card__form-wrapper">
          {this.props.cardType === "eventForm" ? (
            <EventForm
              toggleCard={this.props.toggleCard}
              touchedDate={this.props.touchedDate}
              getDate={this.props.getDate}
              getEventData={this.props.getEventData}
            />
          ) : (
            <EventList
              pickedData={pickedData}
              toggleCard={this.props.toggleCard}
              removeRecord={this.props.removeRecord}
            />
          )}
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);
