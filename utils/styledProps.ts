import { FormikErrors } from "formik/dist/types";

export type StyledProps = {
  status?: string;
  isVisible?: boolean;
  activeStatuses?: string[];
  bgColor?: string;
  txtColor?: string;
  isValid?: boolean;
  isError?: string;
  isLoading?: boolean;
  errors?: FormikErrors<{
    email?: string;
    username?: string;
    password?: string;
  }>;
};
