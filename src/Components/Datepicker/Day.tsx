import React, { FC, useState } from "react";
import moment from "moment";

type DayPropsType = {
  day: string;
  todaySelect?: boolean;
  date: Date;
  filledDate?: boolean;
  getDate: (payload: Date) => void;
  toggleCard: (payload: boolean) => void;
};

const Day: FC<DayPropsType> = ({
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

  return (
    <button
      onClick={() => {
        getDate(date);
        toggleCard(true);
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
