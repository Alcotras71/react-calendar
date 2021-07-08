import React from "react";
import { connect } from "react-redux";
import { getDate, toggleCard } from "../../redux/datepickerReducer";
import { AppStateType } from "../../redux/store";
import { ToggleCardPayload } from "../../redux/datepickerReducer";
import { EventData } from "../../types/types";
import Datepicker from "./Datepicker";

type MapStatePropsType = {
  eventData: Array<EventData>;
};

export type MapDispatchPropsType = {
  getDate: (payload: Date) => void;
  toggleCard: (payload: ToggleCardPayload) => void;
};

export type PropsType = MapDispatchPropsType & MapStatePropsType;

class DatepickerContainer extends React.Component<PropsType> {
  render() {
    return (
      <>
        <Datepicker
          toggleCard={this.props.toggleCard}
          getDate={this.props.getDate}
          eventData={this.props.eventData}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    eventData: state.datepicker.eventData,
  };
};

export default connect(mapStateToProps, {
  getDate,
  toggleCard,
})(DatepickerContainer);
