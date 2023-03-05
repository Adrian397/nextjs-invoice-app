import { useField } from "formik";
import { NarrowWrapper } from "./NarrowInput.styled";

type Props = {
  label: string;
  name: string;
};

export const NarrowInput = ({ label, name }: Props) => {
  const [field, meta] = useField(name);

  //   console.log(meta);

  return (
    <NarrowWrapper isValid={!(meta.touched && meta.error)}>
      <label>{label}</label>

      <input type="text" {...field} />
    </NarrowWrapper>
  );
};
