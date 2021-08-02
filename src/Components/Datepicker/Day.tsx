import React, { FC } from "react";
import { MapDispatchPropsType } from "./DatepickerContainer";
import DayButton from "./DayButton";

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

  return filledDate ? (
    <DayButton
      checkPreviousDates={checkPreviousDates}
      date={date}
      cardType={"eventList"}
      todaySelect={todaySelect}
      filledDate={filledDate}
      getDate={getDate}
      toggleCard={toggleCard}
    >
      {day}
    </DayButton>
  ) : (
    <DayButton
      checkPreviousDates={checkPreviousDates}
      date={date}
      cardType={"eventForm"}
      isSelected={true}
      todaySelect={todaySelect}
      filledDate={filledDate}
      getDate={getDate}
      toggleCard={toggleCard}
    >
      {day}
    </DayButton>
  );
};

export default Day;
