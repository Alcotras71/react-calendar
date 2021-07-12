import moment from "moment";
import React, { FC } from "react";
import { ToggleCardPayload } from "../../../redux/datepickerReducer";
import { EventData } from "../../../types/types";
import { returnDescriptionPickedDate } from "../../../utils/helpers/date-helpers";

import "./eventList.scss";

type PropsType = {
  touchedDate: Date | null;
  eventData: Array<EventData>;
  getDate: (payload: Date) => void;
  toggleCard: (payload: ToggleCardPayload) => void;
};

const EventList: FC<PropsType> = ({ touchedDate, eventData, toggleCard }) => {
  const pickedData = returnDescriptionPickedDate(eventData, touchedDate);

  return (
    <div className="event-list">
      <div className="event-list__event-wrapper">
        {pickedData?.map((data, index) => (
          <div className="event-list__event" key={index}>
            <h2 className="event-list__title">{data?.eventName}</h2>
            <div className="event-list__clock">
              <span>{data?.startTime}</span> - <span>{data?.endTime}</span>
            </div>
            <p className="event-list__date">
              {moment(data?.touchedDate).format("DD-MM-yyyy")}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          toggleCard({ isOpen: true, cardType: "eventForm" });
        }}
        className="event-list__btn"
        type="submit"
      >
        Новое событие
      </button>
    </div>
  );
};

export default EventList;
