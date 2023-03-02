import { NarrowInput, NarrowInputs, WideInput } from "../Inputs/Inputs.styled";
import { Bill } from "./BillTo.styled";

export const BillTo = () => {
  return (
    <Bill>
      <p>Bill To</p>
      <WideInput>
        <label>Client's Name</label>
        <input type="text" />
      </WideInput>
      <WideInput>
        <label>Client's Email</label>
        <input type="text" placeholder="e.g. email@example.com" />
      </WideInput>
      <WideInput>
        <label>Street Address</label>
        <input type="text" />
      </WideInput>

      <NarrowInputs>
        <NarrowInput>
          <label>City</label>
          <input type="text" />
        </NarrowInput>
        <NarrowInput>
          <label>Post Code</label>
          <input type="text" />
        </NarrowInput>
        <NarrowInput>
          <label>Country</label>
          <input type="text" />
        </NarrowInput>
      </NarrowInputs>
    </Bill>
  );
};
