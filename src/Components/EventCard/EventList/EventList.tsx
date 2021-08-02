import moment from "moment";
import React, { FC } from "react";
import { CardType, ToggleCardPayload } from "../../../redux/datepickerReducer";
import { EventData } from "../../../types/types";
import NewEventBtn from "./NewEventBtn";

import "./eventList.scss";

export type PropsType = {
  pickedData: Array<EventData> | undefined;
  toggleCard: (payload: ToggleCardPayload) => void;
  removeRecord: (payload: EventData) => void;
};

const EventList: FC<PropsType> = ({ pickedData, toggleCard, removeRecord }) => {
  const handleRemoveRecord = (pickedData: Array<EventData>, index: number) => {
    removeRecord(pickedData && pickedData[index]);
  };

  return (
    <div className="event-list">
      <div className="event-list__event-wrapper">
        {pickedData?.map((data, index) => {
          return (
            <div className="event-list__event" key={index}>
              <div className="event-list__container">
                <h2 className="event-list__title">{data?.eventName}</h2>
                <button
                  className={`event-list__btn-delete event-list__btn-${index}`}
                  onClick={() => handleRemoveRecord(pickedData, index)}
                >
                  X
                </button>
              </div>
              <div className="event-list__clock">
                <span>{data?.startTime}</span> - <span>{data?.endTime}</span>
              </div>
              <p className="event-list__date">
                {moment(data?.touchedDate).format("DD-MM-yyyy")}
              </p>
            </div>
          );
        })}
      </div>

      <NewEventBtn isOpen={true} cardType={"eventForm"} toggleCard={toggleCard}>
        Новое событие
      </NewEventBtn>
    </div>
  );
};

export default EventList;
