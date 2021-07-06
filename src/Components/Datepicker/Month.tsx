import React, { FC } from "react";
import { useMonth, GetDaysProps } from "@datepicker-react/hooks";
import moment from "moment";
import Day from "./Day";
import { PickedDate } from "../../types/types";

type PropsType = {
  getDate: (payload: PickedDate) => void;
  toggleCard: (payload: boolean) => void;
};

const Month: FC<GetDaysProps & PropsType> = ({
  year,
  month,
  firstDayOfWeek,
  getDate,
  toggleCard,
}) => {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
    monthLabelFormat: (getDate) => {
      const ru = moment()
        .locale("ru")
        .localeData()
        .months(moment([year, month]));
      const ruMonth = ru.charAt(0).toUpperCase() + ru.slice(1);
      // Russian namespace
      return ruMonth;
    },
  });

  return (
    <div>
      <div className="datepicker__label">{monthLabel}</div>
      <div className="datepicker__week">
        {weekdayLabels.map(
          (dayLabel: string): JSX.Element => (
            <div style={{ textAlign: "center" }} key={dayLabel}>
              {dayLabel}
            </div>
          )
        )}
      </div>
      <div className="datepicker__calendar">
        {days.map((day: any, id: number) => {
          const dateNow = moment().date();
          const monthNow = moment().month();
          const dayIter =
            day.date instanceof Date ? day.date.getDate() : day.date;

          return dayIter === dateNow && month === monthNow ? (
            <Day
              date={day.date}
              key={id}
              day={day.dayLabel}
              bgcolor={"blue"}
              getDate={getDate}
              month={month}
              toggleCard={toggleCard}
            />
          ) : (
            <Day
              getDate={getDate}
              date={day.date}
              key={id}
              day={day.dayLabel}
              month={month}
              toggleCard={toggleCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Month;
