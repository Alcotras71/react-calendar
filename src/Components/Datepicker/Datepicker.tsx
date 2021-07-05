import React, { FC, useState } from "react";
import {
  useDatepicker,
  START_DATE,
  OnDatesChangeProps,
  FocusedInput,
} from "@datepicker-react/hooks";
import Month from "./Month";
import DatepickerContext from "./datepickerContext";
import { DatepickerStateType } from "../../redux/datepickerReducer";

type PropsType = {
  startDate: Date | null;
  endDate: Date | null;
  focusedInput: FocusedInput;
  changeFocusInput: (date: typeof START_DATE) => void;
  changeData: (data: OnDatesChangeProps) => void;
};

const Datepicker: FC<PropsType> = ({
  startDate,
  endDate,
  focusedInput,
  changeFocusInput,
  changeData,
}) => {
  const [state, setState] = useState({
    startDate: null as null | Date,
    endDate: null as null | Date,
    focusedInput: START_DATE as FocusedInput,
  });
  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: startDate,
    endDate: endDate,
    focusedInput: focusedInput,
    onDatesChange: handleDateChange,
    numberOfMonths: 1,
  });

  function handleDateChange(data: OnDatesChangeProps): void {
    if (!focusedInput) {
      changeFocusInput(START_DATE);
    } else {
      changeData(data);
    }
  }

  // function handleDateChange(data: OnDatesChangeProps): void {
  //   if (!data.focusedInput) {
  //     setState({ ...data, focusedInput: START_DATE });
  //   } else {
  //     setState(data);
  //   }
  // }

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      <div>
        <strong>Focused input: </strong>
        {focusedInput}
      </div>
      <div>
        <strong>Start date: </strong>
        {startDate && startDate.toLocaleString()}
      </div>
      <div>
        <strong>End date: </strong>
        {endDate && endDate.toLocaleString()}
      </div>

      <button type="button" onClick={goToPreviousMonths}>
        {"<"}
      </button>
      <button type="button" onClick={goToNextMonths}>
        {">"}
      </button>

      <div
        style={{
          display: "grid",
          margin: "32px 0 0",
          gridTemplateColumns: `repeat(${activeMonths.length}, 300px)`,
          gridGap: "0 64px",
        }}
      >
        {activeMonths.map((month) => (
          <Month
            key={`${month.year}-${month.month}`}
            year={month.year}
            month={month.month}
            firstDayOfWeek={firstDayOfWeek}
          />
        ))}
      </div>
    </DatepickerContext.Provider>
  );
};

export default Datepicker;
