import React, { FC } from "react";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import "./usercard.scss";

type PropsType = {
  toggleCard: (payload: boolean) => void;
  isOpen: boolean;
};

const UserCard: FC<PropsType> = ({ toggleCard, isOpen }) => {
  return (
    <div className={`user-card active ${isOpen ? "active" : ""}`}>
      <form className="user-card__form">
        <div className="user-card__input-wrapper">
          <label htmlFor="name">Название</label>
          <input
            className="user-card__name"
            id="name"
            placeholder="Название события"
          />
        </div>
        <div className="user-card__input-wrapper">
          <label>Время</label>
          <div className="user-card__time">
            <div>
              <span className="user-card__time-text">Начало:</span>
              <DateTimeRangePicker
                value={new Date()}
                disableClock={true}
                format={"y-MM-dd hh:mm"}
              />
            </div>
            {/* <span className="user-card__time-line">__</span>
            <div>
              <span className="user-card__time-text">Конец:</span>
              <DateTimeRangePicker
                value={"15:30"}
                disableClock={true}
              />
            </div> */}
          </div>
        </div>

        <button
          className="user-card__btn"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setTimeout(() => {
              toggleCard(false);
            }, 500);
          }}
        >
          Создать
        </button>
      </form>
    </div>
  );
};

export default UserCard;
