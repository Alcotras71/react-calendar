import React from "react";
import { connect } from "react-redux";
import { START_DATE, OnDatesChangeProps } from "@datepicker-react/hooks";

import {
  changeFocusInput,
  changeData,
  DatepickerStateType,
} from "../../redux/datepickerReducer";
import { AppStateType } from "../../redux/store";

import Datepicker from "./Datepicker";

type MapStatePropsType = DatepickerStateType;

type MapDispatchPropsType = {
  changeFocusInput: (date: typeof START_DATE) => void;
  changeData: (data: OnDatesChangeProps) => void;
};

type PropsType = MapDispatchPropsType & MapStatePropsType;

class DatepickerContainer extends React.Component<PropsType> {
  render() {
    return (
      <>
        <Datepicker
          changeFocusInput={this.props.changeFocusInput}
          startDate={this.props.startDate}
          endDate={this.props.endDate}
          focusedInput={this.props.focusedInput}
          changeData={this.props.changeData}
        />
      </>
    );
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    startDate: state.datepicker.startDate,
    endDate: state.datepicker.endDate,
    focusedInput: state.datepicker.focusedInput,
  };
};

// const mapDispatchToProps = (dispatch:any) => {
//   return {
//     changeFocusInput: (data:any) => dispatch(changeFocusInput(data)),
//     returnState: () => dispatch(returnState())
//   }
// }

export default connect(mapStateToProps, {
  changeFocusInput,
  changeData,
})(DatepickerContainer);
