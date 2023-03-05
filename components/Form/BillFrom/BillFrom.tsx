import { FormikProps } from "formik";
import { InitValuesType } from "../Form.utils";
import { NarrowInputs } from "../Inputs/Inputs.styled";
import { NarrowInput } from "../Inputs/NarrowInput";
import { WideInput } from "../Inputs/WideInput";
import { Bill } from "./BillFrom.styled";

type Props = {
  formik: FormikProps<InitValuesType>;
};

export const BillFrom = ({ formik }: Props) => {
  console.log(formik.errors);
  return (
    <Bill>
      <p>Bill From</p>

      <WideInput label="Street Address" name="senderAddress.street" />

      <NarrowInputs>
        <NarrowInput label="City" name="senderAddress.city" />
        <NarrowInput label="Post Code" name="senderAddress.postCode" />
        <NarrowInput label="Country" name="senderAddress.country" />
      </NarrowInputs>
    </Bill>
  );
};
