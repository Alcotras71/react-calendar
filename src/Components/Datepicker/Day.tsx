import React, { FC } from "react";
import moment from "moment";
import { PickedDate } from "../../types/types";

type DayPropsType = {
  day: string;
  bgcolor?: string;
  date: Date;
  getDate: (payload: PickedDate) => void;
  toggleCard: (payload: boolean) => void;
  month: number;
};

const Day: FC<DayPropsType> = ({
  day,
  bgcolor,
  date,
  getDate,
  month,
  toggleCard,
}) => {
  if (!day) {
    return <div />;
  }

  return (
    <button
      onClick={() => {
        getDate({
          day: Number(day),
          month: month,
          touchedDate: moment(date).add(1, "d").toDate(),
        });
        toggleCard(true);
      }}
      className={`datepicker__day ${bgcolor ? "selected" : ""}`}
      type="button"
    >
      {day}
    </button>
  );
};

export default Day;
