import React, { FC } from "react";
import { MapDispatchPropsType } from "./DatepickerContainer";
import DayButton, { DayButtonType } from "./DayButton";

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
  if (!day) {
    return <div />;
  }

  const childProps: DayButtonType & MapDispatchPropsType = {
    checkPreviousDates,
    date,
    cardType: filledDate ? "eventList" : "eventForm",
    isSelected: !filledDate,
    todaySelect,
    filledDate,
    getDate,
    toggleCard,
  };

  return <DayButton {...childProps}>{day}</DayButton>;
};

export default Day;
