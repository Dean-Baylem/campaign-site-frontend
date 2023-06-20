import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, InputLabel, Select, MenuItem } from "@mui/material";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { AuthContext } from "../../shared/context/auth-context";
import { useNavigate } from "react-router-dom";
import "../navigation/CreateNewCard.css";

const validationSchema = yup.object({
  campaignName: yup
    .string("What is your campaigns title?")
    .required("Please enter your campaigns title."),
});

const CreateNewCampaign = (props) => {
  const auth = useContext(AuthContext);
  const { error, sendRequest } = useHttpRequest();
  const navigate = useNavigate();
  const [selectedWorld, setSeletedWorld] = useState();

  const handleChange = event => {
    setSeletedWorld(event.target.value);
  }

  const formik = useFormik({
    initialValues: {
      campaignName: "",
      worldId: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_REQUEST_URL + `/campaign/createcampaign/${auth.playerId}`,
          "POST",
          JSON.stringify({
            campaignName: values.campaignName,
            worldId: selectedWorld._id,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        navigate(`/`);
      } catch (err) {
      }
    },
  });

  return (
    <div className="form-container">
      {error && <p>Oops, there was a problem. Please try again!</p>}
      <form className="create-campaign-form" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="campaignName"
          name="campaignName"
          label="Campaign Title"
          value={formik.values.campaignName}
          onChange={formik.handleChange}
          error={
            formik.touched.campaignName && Boolean(formik.errors.campaignName)
          }
        />
        <InputLabel id="campaign-world-selection-label">World</InputLabel>
        <Select
          fullWidth
          labelId="campaign-world-selection"
          id="campaign-world-selection"
          value={selectedWorld}
          onChange={handleChange}
          error={formik.touched.worldId && Boolean(formik.errors.worldId)}
        >
        <MenuItem key={""} value={""}>No Selected</MenuItem>
          {props.worlds.map((world, index) => (
            <MenuItem key={index} value={world}>{world.worldName}</MenuItem>
          ))}
        </Select>
        <div className="create-buttons">
          <Button variant="outlined" type="submit">
            Submit
          </Button>
          <Button variant="outlined" onClick={props.return}>
            Return
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewCampaign;
