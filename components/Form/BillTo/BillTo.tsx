import { FormikProps } from "formik";
import { InitValuesType } from "../Form.utils";
import { Input } from "../Input/Input";
import { Bill, NarrowInputs } from "./BillTo.styled";

type Props = {
  formik: FormikProps<InitValuesType>;
};

export const BillTo = ({ formik }: Props) => {
  return (
    <Bill>
      <p>Bill To</p>
      <Input label="Client's name" name="clientName" />
      <Input label="Client's Email" name="clientEmail" />
      <Input label="Street Address" name="clientAddress.street" />
      <NarrowInputs>
        <Input label="City" name="clientAddress.city" />
        <Input label="Post Code" name="clientAddress.postCode" />
        <Input label="Country" name="clientAddress.country" />
      </NarrowInputs>
    </Bill>
  );
};
