import { useField } from "formik";
import { Field } from "./ItemInput.styled";

type Props = {
  name: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  isDisabled: boolean;
};

export const ItemInput = ({
  name,
  placeholder,
  onChange,
  isDisabled,
}: Props) => {
  const [field, meta] = useField(name);

  return (
    <Field
      isValid={!(meta.touched && meta.error)}
      type="text"
      {...field}
      placeholder={placeholder}
      onChange={onChange}
      disabled={isDisabled}
    />
  );
};
