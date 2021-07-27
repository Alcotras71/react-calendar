import React, { FC, useState } from "react";
import { CardType } from "../../redux/datepickerReducer";
import { MapDispatchPropsType } from "./DatepickerContainer";

type DayPropsType = {
  day: string;
  todaySelect?: boolean;
  date: Date;
  filledDate?: boolean;
  checkPreviousDates: boolean;
};

const Day: FC<DayPropsType & MapDispatchPropsType> = ({
  day,
  todaySelect,
  date,
  getDate,
  toggleCard,
  filledDate,
  checkPreviousDates,
}) => {
  const [selected, setSelected] = useState(false);

  const onClickHandler = (date: Date, cardType: CardType, selected = false) => {
    getDate(date);
    toggleCard({ isOpen: true, cardType });
    selected && setSelected(true);
  };

  const dayClassName = `datepicker__day ${
    todaySelect || selected ? "selected" : ""
  } ${filledDate ? "event" : ""}`;

  if (!day) {
    return <div />;
  }

  return filledDate ? (
    <button
      onClick={() => {
        onClickHandler(date, "eventList");
      }}
      className={dayClassName}
      type="button"
      disabled={checkPreviousDates}
    >
      {day}
    </button>
  ) : (
    <button
      disabled={checkPreviousDates}
      onClick={() => {
        onClickHandler(date, "eventForm", true);
      }}
      onBlur={() => {
        setSelected(false);
      }}
      className={dayClassName}
      type="button"
    >
      {day}
    </button>
  );
};

export default Day;
