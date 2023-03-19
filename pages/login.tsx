import {
  GithubBtn,
  GoogleBtn,
  LoginBtn,
  LoginForm,
  RegisterLink,
  Wrapper,
} from "@/components/Login/Login.styled";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Alert, Snackbar } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const successMessage = window.sessionStorage.getItem("successMessage");
    if (successMessage) {
      setSuccessMessage(successMessage);
      window.sessionStorage.removeItem("successMessage");
    }
  }, []);

  const handleToastClose = () => {
    setSuccessMessage("");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),

    onSubmit: async (values) => {
      setIsLoading(true);

      const response = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/",
      });

      if (response?.ok && response.url) {
        router.push(response.url);
      }

      if (response?.error) {
        formik.resetForm();
        setError(response.error);
      }

      setIsLoading(false);
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
      <LoginForm
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
            onBlur={() => formik.validateField("email")}
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
        <LoginBtn type="submit" isLoading={isLoading}>
          {isLoading ? (
            <CircularProgress color="inherit" size="18.64px" />
          ) : (
            "Log in"
          )}
        </LoginBtn>
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
      <Snackbar
        open={!!successMessage}
        autoHideDuration={6000}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        onClose={handleToastClose}
      >
        <Alert
          severity="success"
          sx={{
            pr: "1.5rem",
            pl: "1.5rem",
            color: "white",
            backgroundColor: "#2E7D32",
            svg: {
              fill: "white",
            },
          }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </Wrapper>
  );
};

export default Login;
