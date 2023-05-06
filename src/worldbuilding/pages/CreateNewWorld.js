import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { AuthContext } from "../../shared/context/auth-context";
import { useNavigate } from "react-router-dom";
import "./CreateNewWorld.css";

const validationSchema = yup.object({
  worldname: yup
    .string("What is your worlds name?")
    .required("Please enter your worlds name"),
  worlddesc: yup
    .string("Describe your world")
    .required("Please describe your world"),
});

const CreateNewWorld = (props) => {
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
          console.log(responseData.world.id)
          console.log(responseData);
          let id = await responseData.world.id;
          navigate(`/world/${id}`)
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
            error={formik.touched.worldname && Boolean(formik.errors.worldname)}
          />
          <TextField
            fullWidth
            multiline
            minRows={4}
            id="worlddesc"
            name="worlddesc"
            label="World Description"
            value={formik.values.worlddesc}
            onChange={formik.handleChange}
            error={formik.touched.worlddesc && Boolean(formik.errors.worlddesc)}
          />
          <div className="create-buttons">
            <Button
              variant="outlined"
              type="submit"
            >
              Submit
            </Button>
            <Button
              variant="outlined"
              onClick={props.return}
            >
              Return
            </Button>
          </div>
        </form>
      </div>
    );
}

export default CreateNewWorld;