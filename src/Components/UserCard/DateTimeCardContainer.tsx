import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import { EventData } from "../../types/types";
import {
  toggleCard,
  getDate,
  getEventData,
} from "../../redux/datepickerReducer";
import DateTimeCard from "./DateTimeCard";

type MapStatePropsType = {
  isOpen: boolean;
  touchedDate: Date | null;
};

type MapDispatchPropsType = {
  toggleCard: (payload: boolean) => void;
  getDate: (payload: Date) => void;
  getEventData: (payload: EventData) => void;
};

type PropsType = MapDispatchPropsType & MapStatePropsType;

class DateTimeContainer extends React.Component<PropsType> {
  render() {
    return (
      <>
        <DateTimeCard
          toggleCard={this.props.toggleCard}
          isOpen={this.props.isOpen}
          touchedDate={this.props.touchedDate}
          getDate={this.props.getDate}
          getEventData={this.props.getEventData}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isOpen: state.datepicker.isOpen,
    touchedDate: state.datepicker.touchedDate,
  };
};

export default connect(mapStateToProps, {
  toggleCard,
  getDate,
  getEventData,
})(DateTimeContainer);
