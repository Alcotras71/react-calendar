import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import {toggleCard} from '../../redux/datepickerReducer'
import UserCard from "./UserCard";

type MapStatePropsType = {
  isOpen: boolean;
};

type MapDispatchPropsType = {
  toggleCard: (payload: boolean) => void;
};

type PropsType = MapDispatchPropsType & MapStatePropsType;

class DatepickerContainer extends React.Component<PropsType> {
  render() {
    return (
      <>
        <UserCard
          toggleCard={this.props.toggleCard}
          isOpen={this.props.isOpen}
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
  toggleCard,
})(DatepickerContainer);
