import React from "react";
import { connect } from "react-redux";
import { getDate, toggleCard } from "../../redux/datepickerReducer";
import { AppStateType } from "../../redux/store";
import Datepicker from "./Datepicker";
import { PickedDate } from "../../types/types";

type MapStatePropsType = {
  isOpen: boolean;
};

type MapDispatchPropsType = {
  getDate: (payload: PickedDate) => void;
  toggleCard: (payload: boolean) => void;
};

type PropsType = MapDispatchPropsType & MapStatePropsType;

class DatepickerContainer extends React.Component<PropsType> {
  render() {
    return (
      <>
        <Datepicker
          toggleCard={this.props.toggleCard}
          getDate={this.props.getDate}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isOpen: state.datepicker.isOpen,
  };
};

export default connect(mapStateToProps, {
  getDate,
  toggleCard,
})(DatepickerContainer);