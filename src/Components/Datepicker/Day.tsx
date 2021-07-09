import React, { FC, useState } from "react";
import { MapDispatchPropsType } from "./DatepickerContainer";

type DayPropsType = {
  day: string;
  todaySelect?: boolean;
  date: Date;
  filledDate?: boolean;
};

const Day: FC<DayPropsType & MapDispatchPropsType> = ({
  day,
  todaySelect,
  date,
  getDate,
  toggleCard,
  filledDate,
}) => {
  if (!day) {
    return <div />;
  }

  const [selected, setSelected] = useState(false);

  return filledDate ? (
    <button
      onClick={() => {
        toggleCard({ isOpen: true, cardType: "eventList" });
        getDate(date);
      }}
      className={`datepicker__day ${
        todaySelect || selected ? "selected" : ""
      } ${filledDate ? "event" : ""}`}
      type="button"
    >
      {day}
    </button>
  ) : (
    <button
      onClick={() => {
        getDate(date);
        toggleCard({ isOpen: true, cardType: "eventForm" });
        setSelected(true);
      }}
      onBlur={() => {
        setSelected(false);
      }}
      className={`datepicker__day ${
        todaySelect || selected ? "selected" : ""
      } ${filledDate ? "event" : ""}`}
      type="button"
    >
      {day}
    </button>
  );
};

export default Day;
