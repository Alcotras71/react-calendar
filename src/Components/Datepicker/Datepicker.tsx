import React, { FC, useState } from "react";
import {
  useDatepicker,
  START_DATE,
  OnDatesChangeProps,
  FocusedInput,
} from "@datepicker-react/hooks";
import Month from "./Month";
import { PickedDate } from "../../types/types";

import "./datepicker.scss";

type PropsType = {
  getDate: (payload: PickedDate) => void;
  toggleCard: (payload: boolean) => void;
};

const Datepicker: FC<PropsType> = ({ getDate, toggleCard }) => {
  const [state, setState] = useState({
    startDate: null as null | Date,
    endDate: null as null | Date,
    focusedInput: START_DATE as FocusedInput,
  });
  const {
    firstDayOfWeek,
    activeMonths,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange,
    numberOfMonths: 1,
  });

  function handleDateChange(data: OnDatesChangeProps) {
    if (!data.focusedInput) {
      setState({ ...data, focusedInput: START_DATE });
    } else {
      setState(data);
    }
  }

  return (
    <div className="datepicker">
      <div className="datepicker__month-btn-wrapper">
        <button
          className="datepicker__month-btn"
          type="button"
          onClick={goToPreviousMonths}
        >
          {"<"}
        </button>
        <button
          className="datepicker__month-btn"
          type="button"
          onClick={goToNextMonths}
        >
          {">"}
        </button>
      </div>

      <div
        className="datepicker__wrapper"
        style={{
          gridTemplateColumns: `repeat(${activeMonths.length}, 350px)`,
        }}
      >
        {activeMonths.map((month) => (
          <Month
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            firstDayOfWeek={firstDayOfWeek}
            getDate={getDate}
            toggleCard={toggleCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Datepicker;
