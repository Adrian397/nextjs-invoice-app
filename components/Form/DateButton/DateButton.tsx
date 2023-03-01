import { InputWrapper } from "./DateButton.styled";

type Props = {};

export const DateButton = (props: Props) => {
  return (
    <InputWrapper>
      <label>Invoice Date</label>
      <button type="button">
        <span>21 Aug 2021</span>
        <img src={"/icon-calendar.svg"} alt="calendar-icon" />
      </button>
    </InputWrapper>
  );
};
