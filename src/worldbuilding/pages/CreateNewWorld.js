import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { AuthContext } from "../../shared/context/auth-context";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import MainNavigation from "../../shared/navigation/MainNavigation";

const validationSchema = yup.object({
  worldname: yup
    .string("What is your worlds name?")
    .required("Please enter your worlds name"),
  worlddesc: yup
    .string("Describe your world")
    .required("Please describe your world"),
});

const CreateNewWorld = () => {
    const auth = useContext(AuthContext);
    const { error, sendRequest } = useHttpRequest();
    const navigate = useNavigate();

    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: async (values) => {
        try {
          const responseData = await sendRequest(
            `http://localhost:5000/worlds/${auth.playerId}/createworld`,
            "POST",
            JSON.stringify({
              worldName: values.worldname,
              worldDesc: values.worlddesc,
            }),
            {
              "Content-Type": "application/json",
            }
          );
          console.log(responseData)
          console.log(responseData.id)
          navigate(`/${auth.playerId}`);
        } catch (err) {
          console.log(err);
          console.log("Oh no! There was an error!");
        }
      },
    });


    return (
          <div className="form-container">
          {error && <p>Oops, there was a problem. Please try again!</p>}
            <form className="create-world-form" onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="worldname"
                name="worldname"
                label="World Name"
                value={formik.values.worldname}
                onChange={formik.handleChange}
                error={
                  formik.touched.worldname && Boolean(formik.errors.worldname)
                }
              />
              <TextField
                fullWidth
                rows={4}
                id="worlddesc"
                name="worlddesc"
                label="World Description"
                value={formik.values.worlddesc}
                onChange={formik.handleChange}
                error={
                  formik.touched.worlddesc && Boolean(formik.errors.worlddesc)
                }
              />
              <Button
                sx={{ margin: "0% 20%" }}
                className="dark-button"
                variant="outlined"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
    );
}

export default CreateNewWorld;