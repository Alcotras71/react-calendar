import React, { FC } from "react";
import { CardType, ToggleCardPayload } from "../../../redux/datepickerReducer";

type HandleToggleCardType = {
  isOpen: boolean;
  cardType: CardType;
};

type NewEventBtn = {
  isOpen: boolean;
  cardType: CardType;
  toggleCard: (payload: ToggleCardPayload) => void;
};

const NewEventBtn: FC<NewEventBtn> = ({
  isOpen,
  cardType,
  toggleCard,
  children,
}) => {
  const handleToggleCard = ({ isOpen, cardType }: HandleToggleCardType) => {
    toggleCard({ isOpen, cardType });
  };

  return (
    <button
      onClick={() => handleToggleCard({ isOpen, cardType })}
      className="event-list__btn"
      type="submit"
    >
      {children}
    </button>
  );
};

export default NewEventBtn;
