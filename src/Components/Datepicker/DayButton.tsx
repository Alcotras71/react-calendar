import React, { FC, useState } from "react";
import { CardType } from "../../redux/datepickerReducer";
import { MapDispatchPropsType } from "./DatepickerContainer";

export type DayButtonType = {
  checkPreviousDates: boolean;
  date: Date;
  cardType: CardType;
  isSelected?: boolean;
  todaySelect?: boolean;
  filledDate?: boolean;
  backgroundColor?: any;
  width?: any;
  height?: any;
};

const DayButton: FC<DayButtonType & MapDispatchPropsType> = ({
  checkPreviousDates,
  date,
  cardType,
  isSelected,
  todaySelect,
  filledDate,
  getDate,
  toggleCard,
  backgroundColor,
  width,
  height,
  children,
  ...rest
}) => {
  const [selected, setSelected] = useState(false);

  const onClickHandler = (
    date: Date,
    cardType: CardType,
    isSelected = false
  ) => {
    getDate(date);
    toggleCard({ isOpen: true, cardType });
    isSelected && setSelected(true);
  };

  const dayClassName = `datepicker__day ${
    todaySelect || selected ? "selected" : ""
  } ${filledDate ? "event" : ""}`;

  return (
    <button
      disabled={checkPreviousDates}
      onClick={() => {
        onClickHandler(date, cardType, isSelected);
      }}
      onBlur={() => {
        setSelected(false);
      }}
      className={dayClassName}
      type="button"
      style={{ backgroundColor, width, height, ...rest }}
    >
      {children}
    </button>
  );
};

export default DayButton;
