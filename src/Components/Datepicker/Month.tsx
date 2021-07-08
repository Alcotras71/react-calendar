import React, { FC } from "react";
import { useMonth, GetDaysProps } from "@datepicker-react/hooks";
import moment from "moment";
import Day from "./Day";
import { PropsType } from "./DatepickerContainer";

const Month: FC<GetDaysProps & PropsType> = ({
  year,
  month,
  firstDayOfWeek,
  getDate,
  toggleCard,
  eventData,
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

  const dateNow = moment().date();
  const monthNow = moment().month();

  const dateArray = eventData.map((obj) => {
    return {
      day: moment(obj.touchedDate).date(),
      month: moment(obj.touchedDate).month(),
    };
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
          const dayIter = moment(day.date).date();

          const checkFilledDate = (): boolean | undefined => {
            return (
              dateArray.find(
                (data) => data.month === month && data.day === dayIter
              ) !== undefined
            );
          };

          return (
            <Day
              date={day.date}
              key={id}
              day={day.dayLabel}
              todaySelect={
                dayIter === dateNow && month === monthNow ? true : false
              }
              filledDate={checkFilledDate()}
              getDate={getDate}
              toggleCard={toggleCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Month;
