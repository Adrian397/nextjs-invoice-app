import { FormikProps } from "formik";
import { InitValuesType } from "../Form.utils";
import { NarrowInputs } from "../Inputs/Inputs.styled";
import { NarrowInput } from "../Inputs/NarrowInput";
import { WideInput } from "../Inputs/WideInput";
import { Bill } from "./BillTo.styled";

type Props = {
  formik: FormikProps<InitValuesType>;
};

export const BillTo = ({ formik }: Props) => {
  return (
    <Bill>
      <p>Bill To</p>

      <WideInput label="Client's name" name="clientName" />
      <WideInput label="Client's Email" name="clientEmail" />
      <WideInput label="Street Address" name="clientAddress.street" />

      <NarrowInputs>
        <NarrowInput label="City" name="clientAddress.city" />
        <NarrowInput label="Post Code" name="clientAddress.postCode" />
        <NarrowInput label="Country" name="clientAddress.country" />
      </NarrowInputs>
    </Bill>
  );
};
