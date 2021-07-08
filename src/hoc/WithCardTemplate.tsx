import React from "react";
import { connect } from "react-redux";
import { PropsType } from "../Components/EventForm/EventFormContainer";
import { AppStateType } from "../redux/store";

type MapStatePropsType = {
  isOpen: boolean;
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isOpen: state.datepicker.isOpen,
  };
};

const WithCardTemplate = (Component: React.ElementType) => {
  class CardComponent extends React.Component<PropsType & MapStatePropsType> {
    render() {
      return (
        <div className={`user-card ${this.props.isOpen ? "active" : ""}`}>
          <div className="user-card__form">
            <Component {...this.props} />
          </div>
        </div>
      );
    }
  }

  const ConnectedCardComponent = connect(mapStateToProps)(CardComponent);

  return ConnectedCardComponent;
};

export default WithCardTemplate;
