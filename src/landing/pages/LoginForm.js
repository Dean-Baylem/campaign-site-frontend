import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Please enter your email"),
  password: yup
    .string("Enter your password")
    .required("Please enter your password"),
});

const LoginForm = props => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            sx={{ gridArea: "1 / 1 / span 1 / span 2" }}
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
            sx={{ gridArea: "2 / 1 / span 1 / span 2" }}
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
            Signup
          </Button>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default LoginForm;