import {
  RegisterBtn,
  RegisterForm,
  RegisterLink,
  Wrapper,
} from "@/components/Register/Register.styled";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import * as Yup from "yup";

const Register = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

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

    onSubmit: async (values) => {
      setIsLoading(true);
      const response = await fetch(
        "https://nextjs-invoice-app-dusky.vercel.app/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      const result = await response.json();

      if (!response.ok && response.status === 422) {
        formik.resetForm();
        setError(result.message);
      }

      if (response.ok) {
        window.sessionStorage.setItem(
          "successMessage",
          "Registration successful! Please log in."
        );
        router.replace("/login");
      }

      setIsLoading(false);
    },

    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <Wrapper>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterForm
        onSubmit={formik.handleSubmit}
        errors={formik.errors}
        isError={error}
      >
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            autoComplete="off"
            {...formik.getFieldProps("email")}
            onBlur={() => {
              setError("");
              formik.validateField("email");
            }}
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
          {error ? (
            <p>
              <ErrorOutlineIcon /> {error}
            </p>
          ) : (
            ""
          )}
        </div>
        <RegisterBtn type="submit" isLoading={isLoading}>
          {isLoading ? (
            <CircularProgress color="inherit" size="18.64px" />
          ) : (
            "Register"
          )}
        </RegisterBtn>
      </RegisterForm>
      <RegisterLink>
        Already have an account? <Link href="/login">Login</Link>
      </RegisterLink>
    </Wrapper>
  );
};

export default Register;
