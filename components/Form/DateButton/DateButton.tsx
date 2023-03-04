import { options } from "@/utils/dateFormat";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { InputWrapper } from "./DateButton.styled";

export const DateButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [value, onChange] = useState(new Date());

  const handleDatePick = (value: Date) => {
    onChange(value);
    setIsVisible(false);
  };

  return (
    <InputWrapper>
      <label>Invoice Date</label>
      <button
        type="button"
        onClick={() => setIsVisible((prevState) => !prevState)}
      >
        <span>{value.toLocaleString("en-UK", options)}</span>
        <img src="/icon-calendar.svg" alt="calendar-icon" />
      </button>
      {isVisible && (
        <Calendar
          view="month"
          locale="en-US"
          value={value}
          onChange={handleDatePick}
        />
      )}
    </InputWrapper>
  );
};
