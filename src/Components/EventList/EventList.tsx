import React, { FC, SyntheticEvent, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import TimePicker, { TimePickerValue } from "react-time-picker";
import { PropsType } from "./EventListContainer";
import ru from "date-fns/locale/ru";


const EventList: FC<PropsType> = ({ cardType }) => {
  return cardType === "eventList" ? (
    <button className="user-card__btn" type="submit">
      Создать
    </button>
  ) : null;
};

export default EventList;
