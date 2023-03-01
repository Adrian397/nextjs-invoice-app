import { NarrowInput, NarrowInputs, WideInput } from "../Inputs/Inputs.styled";
import { Bill } from "./BillFrom.styled";

export const BillFrom = () => {
  return (
    <Bill>
      <p>Bill From</p>
      <WideInput>
        <label htmlFor="streetAddressFrom">Street Address</label>
        <input id="streetAddressFrom" />
      </WideInput>

      <NarrowInputs>
        <NarrowInput>
          <label htmlFor="cityFrom">City</label>
          <input id="cityFrom" />
        </NarrowInput>
        <NarrowInput>
          <label htmlFor="postCodeFrom">Post Code</label>
          <input id="postCodeFrom" />
        </NarrowInput>
        <NarrowInput>
          <label htmlFor="countryFrom">City</label>
          <input id="countryFrom" />
        </NarrowInput>
      </NarrowInputs>
    </Bill>
  );
};
