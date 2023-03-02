import { NarrowInput, NarrowInputs, WideInput } from "../Inputs/Inputs.styled";
import { Bill } from "./BillFrom.styled";

export const BillFrom = () => {
  return (
    <Bill>
      <p>Bill From</p>
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
          <label>City</label>
          <input type="text" />
        </NarrowInput>
      </NarrowInputs>
    </Bill>
  );
};
