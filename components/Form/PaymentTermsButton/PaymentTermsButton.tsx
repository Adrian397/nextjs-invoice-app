import { Props } from "next/script";
import { ReactElement, useState } from "react";
import {
  Arrow,
  Dropdown,
  InputWrapper,
  Menu,
} from "./PaymentTermsButton.styled";

export const PaymentTermsButton = (props: Props): ReactElement => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("Net 30 days");

  const handleDropdownValue = (value: string) => {
    setDropdownValue(value);
    setIsDropdownVisible(false);
  };

  return (
    <InputWrapper>
      <label>Payment Terms</label>

      <Menu isVisible={isDropdownVisible}>
        <button
          type="button"
          onClick={() => setIsDropdownVisible((prevState) => !prevState)}
        >
          <span>{dropdownValue}</span>
          <Arrow
            isVisible={isDropdownVisible}
            src="/icon-arrow-down.svg"
            alt="arrow"
          />
        </button>

        {isDropdownVisible && (
          <Dropdown isVisible={isDropdownVisible}>
            <li onClick={() => handleDropdownValue("Net 1 Day")}>Net 1 Day</li>
            <li onClick={() => handleDropdownValue("Net 7 Days")}>
              Net 7 Days
            </li>
            <li onClick={() => handleDropdownValue("Net 14 Days")}>
              Net 14 Days
            </li>
            <li onClick={() => handleDropdownValue("Net 30 Days")}>
              Net 30 Days
            </li>
          </Dropdown>
        )}
      </Menu>
    </InputWrapper>
  );
};
