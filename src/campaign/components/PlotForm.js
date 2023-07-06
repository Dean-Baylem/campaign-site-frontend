import React, { useContext } from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Switch } from "@mui/material";
import "./PlotForm.css";

const validationSchema = yup.object({
  name: yup.string("Enter Plot Title.").required(),
  description: yup.string("Enter plot description").required(),
  levelStart: yup.number("Enter starting level").required(),
});

const PlotForm = (props) => {
  const { sendRequest } = useHttpRequest();
  const auth = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      act: props.act || 1,
      name: props.name || "",
      description: props.description || "",
      levelStart: props.levelStart || 0,
      levelFinish: props.levelFinish || 0,
      ongoing: props.ongoing || false,
      visible: props.visible || true,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        try {
          const response = await sendRequest(
            props.url,
            props.requestType,
            JSON.stringify({
              act: values.act,
              name: values.name,
              description: values.description,
              levelStart: values.levelStart,
              levelFinish: values.levelFinish,
              ongoing: values.ongoing,
              visible: props.visible,
            }),
            {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.playerId}`,
            }
          );
          console.log(response);
        } catch (err) {}
      if (props.reload) {
        await props.reload(true);
      }
      if (props.setEditable) {
        props.setEditable(false);
      }
    },
  });

  return (
    <div className="plot-form-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="plot-form">
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            id="act"
            name="act"
            label="Act Number"
            value={formik.values.act}
            onChange={formik.handleChange}
            error={formik.touched.act && Boolean(formik.errors.act)}
            helperText={formik.touched.act && formik.errors.act}
            variant="standard"
          />
          <TextField
            id="name"
            name="name"
            label="Plot Title"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            variant="standard"
          />

          <TextField
            fullWidth
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            id="levelStart"
            name="levelStart"
            label="Starting Level"
            value={formik.values.levelStart}
            onChange={formik.handleChange}
            error={
              formik.touched.levelStart && Boolean(formik.errors.levelStart)
            }
            helperText={formik.touched.levelStart && formik.errors.levelStart}
            variant="standard"
          />
          <TextField
            fullWidth
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            id="levelFinish"
            name="levelFinish"
            label="Ending Level"
            value={formik.values.levelFinish}
            onChange={formik.handleChange}
            error={
              formik.touched.levelFinish && Boolean(formik.errors.levelFinish)
            }
            helperText={formik.touched.levelFinish && formik.errors.levelFinish}
            variant="standard"
          />
          <TextField
            sx={{ gridArea: "3 / 1 / span 1 / span 2" }}
            multiline
            minRows={4}
            fullWidth
            id="description"
            name="description"
            label="Plot Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
            variant="standard"
          />
          <div className="plot-form-switches">
            <div className="switch-input">
              <label htmlFor="visible">Visible to Players?</label>
              <Switch
                name="visible"
                id="visible"
                label="visible"
                value={formik.values.visible}
                onChange={formik.handleChange}
              />
            </div>
            <div className="switch-input">
              <label htmlFor="ongoing">Current Act?</label>
              <Switch
                name="ongoing"
                id="ongoing"
                label="ongoing"
                value={formik.values.ongoing}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="custom-buttons form-sub">
            <Button type="submit">
              Submit
            </Button>
            <Button onClick={props.closeModal}>Cancel</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlotForm;
