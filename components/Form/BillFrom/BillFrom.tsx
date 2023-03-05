import { FormikProps } from "formik";
import { InitValuesType } from "../Form.utils";
import { Input } from "../Input/Input";
import { Bill, NarrowInputs } from "./BillFrom.styled";

type Props = {
  formik: FormikProps<InitValuesType>;
};

export const BillFrom = ({ formik }: Props) => {
  return (
    <Bill>
      <p>Bill From</p>
      <Input label="Street Address" name="senderAddress.street" />
      <NarrowInputs>
        <Input label="City" name="senderAddress.city" />
        <Input label="Post Code" name="senderAddress.postCode" />
        <Input label="Country" name="senderAddress.country" />
      </NarrowInputs>
    </Bill>
  );
};
