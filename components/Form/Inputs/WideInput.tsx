import { useField } from "formik";
import { WideWrapper } from "./WideInput.styled";

type Props = {
  label: string;
  name: string;
};

export const WideInput = ({ label, name }: Props) => {
  const [field, meta] = useField(name);

  return (
    <WideWrapper isValid={!(meta.touched && meta.error)}>
      <label>{label}</label>

      <input type="text" {...field} />
    </WideWrapper>
  );
};
