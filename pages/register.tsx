import {
  RegisterBtn,
  RegisterForm,
  RegisterLink,
  Wrapper,
} from "@/components/Register/Register.styled";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import * as Yup from "yup";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      username: Yup.string().required(),
      password: Yup.string().required(),
    }),

    onSubmit: (values) => {
      console.log(values);
    },

    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <Wrapper>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterForm onSubmit={formik.handleSubmit} errors={formik.errors}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            {...formik.getFieldProps("email")}
            onBlur={() => formik.validateField("email")}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            {...formik.getFieldProps("username")}
            onBlur={() => formik.validateField("username")}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...formik.getFieldProps("password")}
            onBlur={() => formik.validateField("password")}
          />
        </div>
        <RegisterBtn type="submit">Register</RegisterBtn>
      </RegisterForm>
      <RegisterLink>
        Already have an account? <Link href="/login">Login</Link>
      </RegisterLink>
    </Wrapper>
  );
}
