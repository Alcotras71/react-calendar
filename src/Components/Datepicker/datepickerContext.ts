import React from "react";

interface datepickerContext {
  focusedDate: any,
  isDateFocused: any,
  isDateSelected: any,
  isDateHovered: any,
  isDateBlocked: any,
  isFirstOrLastSelectedDate: any,
  onDateFocus: any,
  onDateHover: any,
  onDateSelect: any,
}

export const datepickerContextDefaultValue:datepickerContext = {
  focusedDate: null,
  isDateFocused: () => false,
  isDateSelected: () => false,
  isDateHovered: () => false,
  isDateBlocked: () => false,
  isFirstOrLastSelectedDate: () => false,
  onDateFocus: () => { },
  onDateHover: () => { },
  onDateSelect: () => { }
};

export default React.createContext(datepickerContextDefaultValue);
