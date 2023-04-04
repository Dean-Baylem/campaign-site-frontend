import React from "react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button } from "@mui/material";


const validationSchema = yup.object({
    email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
    password: yup
    .string('Enter your password')
    .min(8, 'Passwords should be a minimum of 8 charcaters')
    .required('Password is required'),
    username: yup
    .string('Enter your username')
    .required('A username is required'),
});

const Registration = props => {
    const formik = useFormik({
      initialValues: {
        username: '',
        password: '',
        email: '',
      },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values.username);
            console.log(values.password);
            console.log(values.email);
        }
    });

    return (
      <div className="register-form-container">
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <TextField
            fillwidth
            sx={{ gridArea: "1 / 1 / span 1 / span 2" }}
            id="username"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            fillwidth
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
            fillwidth
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
}

export default Registration;