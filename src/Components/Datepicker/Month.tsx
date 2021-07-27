import React, { FC } from "react";
import { useMonth, GetDaysProps } from "@datepicker-react/hooks";
import moment from "moment";
import Day from "./Day";
import { checkFilledDate } from "../../utils/helpers/date-helpers";
import { PropsType } from "./DatepickerContainer";

const Month: FC<GetDaysProps & PropsType> = ({
  year,
  month,
  firstDayOfWeek,
  getDate,
  toggleCard,
  eventData,
}) => {
  const ru = moment().locale("ru").localeData();
  const { days, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
    monthLabelFormat: (getDate) =>
      // transform to russion locale
      ru
        .months(moment([year, month]))
        .charAt(0)
        .toUpperCase() + ru.months(moment([year, month])).slice(1),
  });

  const dateNow = moment().date();
  const monthNow = moment().month();

  const dateArray = eventData.map((obj) => {
    return {
      day: moment(obj.touchedDate).date(),
      month: moment(obj.touchedDate).month(),
    };
  });

  const weekdayLabels = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  type PrevDate = {
    month: number;
    monthNow: number;
    day: number;
    dateNow: number;
  };

  const checkPreviousDates = ({ month, monthNow, day, dateNow }: PrevDate) => {
    if (month < monthNow) {
      return true;
    } else if (month <= monthNow && day < dateNow) {
      return true;
    } else {
      return false;
    }
  };

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

          return (
            <Day
              date={day.date}
              key={id}
              day={day.dayLabel}
              todaySelect={
                +day.dayLabel === dateNow && month === monthNow ? true : false
              }
              filledDate={checkFilledDate(dateArray, month, dayIter)}
              getDate={getDate}
              toggleCard={toggleCard}
              checkPreviousDates={checkPreviousDates({
                month,
                monthNow,
                day: +day.dayLabel,
                dateNow,
              })}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Month;
