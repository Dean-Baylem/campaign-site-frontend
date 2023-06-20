import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { TextField, Button } from "@mui/material";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Passwords should be a minimum of 8 charcaters")
    .required("Password is required"),
  playername: yup
    .string("Enter your username")
    .required("A username is required"),
});

const Registration = (props) => {

  const { error, sendRequest} = useHttpRequest();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      playername: "",
      password: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_REQUEST_URL + "/player/register",
          "POST",
          JSON.stringify({
            email: values.email,
            password: values.password,
            playername: values.playername,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        auth.login(responseData.playerId, responseData.token);
        navigate("/");
      } catch (err) {
      }
    },
  });

  return (
    <div className="register-form-container">
      {error && <p>User already exists, please log in instead.</p>}
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          sx={{ gridArea: "1 / 1 / span 1 / span 2" }}
          id="playername"
          name="playername"
          label="Username"
          value={formik.values.playername}
          onChange={formik.handleChange}
          error={formik.touched.playername && Boolean(formik.errors.playername)}
          helperText={formik.touched.playername && formik.errors.playername}
        />
        <TextField
          fullWidth
          sx={{ gridArea: "2 / 1 / span 1 / span 2" }}
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          sx={{ gridArea: "3 / 1 / span 1 / span 2" }}
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          sx={{ margin: "0% 20%" }}
          className="dark-button"
          variant="outlined"
          type="submit"
        >
          Submit
        </Button>
        <Button
          sx={{ margin: "0% 20%" }}
          onClick={props.handleSwitch}
          className="dark-button"
          variant="outlined"
        >
          Switch to Login
        </Button>
      </form>
    </div>
  );
};

export default Registration;
