import {
  GithubBtn,
  GoogleBtn,
  LoginBtn,
  LoginForm,
  RegisterLink,
  Wrapper,
} from "@/components/Login/Login.styled";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import * as Yup from "yup";

import Link from "next/link";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().required(),
      password: Yup.string().required(),
    }),

    onSubmit: (values) => {
      console.log(values);
    },

    validateOnChange: false,
    validateOnBlur: false,
  });

  const handleGoogleSignIn = async () => {
    signIn("google", {
      callbackUrl: "https://nextjs-invoice-app-dusky.vercel.app",
    });
  };

  const handleGithubSignIn = async () => {
    signIn("github", {
      callbackUrl: "https://nextjs-invoice-app-dusky.vercel.app",
    });
  };

  return (
    <Wrapper>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm onSubmit={formik.handleSubmit} errors={formik.errors}>
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
        <LoginBtn type="submit">Log in</LoginBtn>
        <div>
          <p>OR</p>
        </div>
        <GoogleBtn type="button" onClick={handleGoogleSignIn}>
          Sign in with Google
          <Image src="/search.png" alt="google icon" width={15} height={15} />
        </GoogleBtn>
        <GithubBtn type="button" onClick={handleGithubSignIn}>
          Sign in with Github
          <Image src="/github.png" alt="github icon" width={15} height={15} />
        </GithubBtn>
      </LoginForm>
      <RegisterLink>
        Don't have an account yet? <Link href="/register">Register</Link>
      </RegisterLink>
    </Wrapper>
  );
};

export default Login;
