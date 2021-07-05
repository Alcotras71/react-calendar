import React, { FC } from "react";
import {
  useMonth,
  GetDaysProps,
} from "@datepicker-react/hooks";
import Day from "./Day";


const Month:FC<GetDaysProps> = ({ year, month, firstDayOfWeek }) =>{
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  });

  return (
    <div>
      <div style={{ textAlign: "center", margin: "0 0 16px" }}>
        <strong>{monthLabel}</strong>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          justifyContent: "center",
        }}
      >
        {weekdayLabels.map((dayLabel: string):JSX.Element => (
          <div style={{ textAlign: "center" }} key={dayLabel}>
            {dayLabel}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          justifyContent: "center",
        }}
      >
        {days.map((day:any, id:number):JSX.Element => (
          <Day date={day.date} key={id} day={day.dayLabel} />
        ))}
      </div>
    </div>
  );
}

export default Month;
