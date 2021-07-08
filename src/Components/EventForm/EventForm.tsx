import React, { FC, SyntheticEvent, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import TimePicker, { TimePickerValue } from "react-time-picker";
import { PropsType } from "./EventFormContainer";
import ru from "date-fns/locale/ru";

import "react-datepicker/dist/react-datepicker.css";
import "./usercard.scss";

registerLocale("ru", ru);

const EventForm: FC<PropsType> = ({
  toggleCard,
  touchedDate,
  getDate,
  getEventData,
  cardType,
}) => {
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("12:00" as string | Date);
  const [endTime, setEndTime] = useState("12:30" as string | Date);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    toggleCard(false);
    getEventData({
      touchedDate: touchedDate,
      startTime: startTime,
      endTime: endTime,
      eventName: eventName,
    });
    setEventName("");
  };

  return cardType === "eventForm" ? (
    <form onSubmit={handleSubmit}>
      <div className="user-card__input-wrapper">
        <label htmlFor="name">Название</label>
        <input
          className="user-card__name"
          id="name"
          placeholder="Название события"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="user-card__input-wrapper">
        <label>Время и Дата</label>
        <div className="user-card__time">
          <DatePicker
            selected={touchedDate ? touchedDate : new Date()}
            onChange={(date: Date) => getDate(date)}
            locale="ru"
            className="user-card__time-input"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div>
          <TimePicker
            onChange={(value: TimePickerValue) => setStartTime(value)}
            value={startTime}
            clearIcon={null}
            disableClock={true}
            format={"hh:mm"}
          />

          <span className="user-card__time-line">-</span>
          <TimePicker
            onChange={(value: TimePickerValue) => setEndTime(value)}
            value={endTime}
            clearIcon={null}
            disableClock={true}
            format={"hh:mm"}
          />
        </div>
      </div>

      <button className="user-card__btn" type="submit">
        Создать
      </button>
    </form>
  ) : null;
};

export default EventForm;
