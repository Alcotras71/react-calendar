import moment from "moment";
import React, { FC } from "react";
import { CardType, ToggleCardPayload } from "../../../redux/datepickerReducer";
import { EventData } from "../../../types/types";

import "./eventList.scss";

type PropsType = {
  pickedData: Array<EventData> | undefined;
  getDate: (payload: Date) => void;
  toggleCard: (payload: ToggleCardPayload) => void;
  removeRecord: (payload: EventData) => void;
};

type HandleToggleCardType = {
  isOpen: boolean;
  cardType: CardType;
};

const EventList: FC<PropsType> = ({ pickedData, toggleCard, removeRecord }) => {
  const handleRemoveRecord = (pickedData: Array<EventData>, index: number) => {
    removeRecord(pickedData && pickedData[index]);
  };

  const handleToggleCard = ({ isOpen, cardType }: HandleToggleCardType) => {
    toggleCard({ isOpen, cardType });
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
      <button
        onClick={() =>
          handleToggleCard({ isOpen: true, cardType: "eventForm" })
        }
        className="event-list__btn"
        type="submit"
      >
        Новое событие
      </button>
    </div>
  );
};

export default EventList;
