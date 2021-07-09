import React, { FC, SyntheticEvent, useState } from "react";
import ru from "date-fns/locale/ru";
import DatePicker, { registerLocale } from "react-datepicker";
import TimePicker, { TimePickerValue } from "react-time-picker";
import { ToggleCardPayload } from "../../../redux/datepickerReducer";

import "react-datepicker/dist/react-datepicker.css";
import { EventData } from "../../../types/types";

// Change Calendar Language
registerLocale("ru", ru);

type PropsType = {
  getDate: (payload: Date) => void;
  toggleCard: (payload: ToggleCardPayload) => void;
  getEventData: (payload: EventData) => void;
  touchedDate: Date | null;
};

const EventForm: FC<PropsType> = ({
  toggleCard,
  touchedDate,
  getDate,
  getEventData,
}) => {
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("12:00" as string | Date);
  const [endTime, setEndTime] = useState("12:30" as string | Date);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    toggleCard({ isOpen: true, cardType: "eventList" });
    getEventData({
      touchedDate: touchedDate,
      startTime: startTime,
      endTime: endTime,
      eventName: eventName,
    });
    setEventName("");
  };

  return (
    <form className="event-card__form" onSubmit={handleSubmit}>
      <div className="event-card__input-wrapper">
        <label htmlFor="name">Название</label>
        <input
          className="event-card__name"
          id="name"
          placeholder="Название события"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
        />
      </div>
      <div className="event-card__input-wrapper">
        <label>Время и Дата</label>
        <div className="event-card__time">
          <DatePicker
            selected={touchedDate ? touchedDate : new Date()}
            onChange={(date: Date) => getDate(date)}
            locale="ru"
            className="event-card__time-input"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div>
          <TimePicker
            onChange={(value: TimePickerValue) => setStartTime(value)}
            value={startTime}
            clearIcon={null}
            disableClock={true}
            format={"HH:mm"}
          />

          <span className="event-card__time-line">-</span>
          <TimePicker
            onChange={(value: TimePickerValue) => setEndTime(value)}
            value={endTime}
            clearIcon={null}
            disableClock={true}
            format={"HH:mm"}
          />
        </div>
      </div>

      <button className="event-card__btn" type="submit">
        Создать
      </button>
    </form>
  );
};

export default EventForm;
