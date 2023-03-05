import { useField } from "formik";

type Props = {};

export const NarrowInput = ({}: Props) => {
  const [field, meta] = useField(name);

  return (
    <Wrapper isError={!(meta.touched && meta.error)}>
      <div>
        <label>City</label>
        <span>{error}</span>
      </div>
      <input type="text" {...field} />
    </Wrapper>
  );
};
