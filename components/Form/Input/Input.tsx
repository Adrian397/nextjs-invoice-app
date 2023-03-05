import { useField } from "formik";
import { Wrapper } from "./Input.styled";

type Props = {
  label?: string;
  name: string;
  placeholder?: string;
};

export const Input = ({ label, name, placeholder }: Props) => {
  const [field, meta] = useField(name);

  return (
    <Wrapper isValid={!(meta.touched && meta.error)}>
      <label>{label}</label>
      <input type="text" {...field} placeholder={placeholder} />
    </Wrapper>
  );
};
