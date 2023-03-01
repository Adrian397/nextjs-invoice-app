import { NarrowInput, NarrowInputs, WideInput } from "../Inputs/Inputs.styled";
import { Bill } from "./BillTo.styled";

export const BillTo = () => {
  return (
    <Bill>
      <p>Bill To</p>
      <WideInput>
        <label htmlFor="clientNameTo">Client's Name</label>
        <input id="clientNameTo" />
      </WideInput>
      <WideInput>
        <label htmlFor="clientEmail">Client's Email</label>
        <input id="clientEmail" placeholder="e.g. email@example.com" />
      </WideInput>
      <WideInput>
        <label htmlFor="streetAddressTo">Street Address</label>
        <input id="streetAddressTo" />
      </WideInput>

      <NarrowInputs>
        <NarrowInput>
          <label htmlFor="cityTo">City</label>
          <input id="cityTo" />
        </NarrowInput>
        <NarrowInput>
          <label htmlFor="postCodeTo">Post Code</label>
          <input id="postCodeTo" />
        </NarrowInput>
        <NarrowInput>
          <label htmlFor="countryTo">Country</label>
          <input id="countryTo" />
        </NarrowInput>
      </NarrowInputs>
    </Bill>
  );
};
