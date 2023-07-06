import React, { useContext } from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Select, MenuItem, Switch } from "@mui/material";
import "./EventForm.css";

const validationSchema = yup.object({
  eventTitle: yup.string("Enter event title").required(),
  eventDesc: yup.string("Enter a description").required(),
});

const EventForm = (props) => {
  const { sendRequest } = useHttpRequest();
  const campaignManager = useContext(CampaignContext);
  const auth = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      eventTitle: props.eventTitle || "",
      eventDesc: props.eventDesc || "",
      eventType: props.eventType || "battle",
      heroic: props.heroic || false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
        await sendRequest(
          props.url,
          props.requestType,
          JSON.stringify({
            eventTitle: values.eventTitle,
            eventDesc: values.eventDesc,
            eventType: values.eventType,
            heroic: values.heroic,
          }),
          {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.playerId}`,
          }
        );
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
    <div className="campaign-event-form-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="campaign-event-form">
          <TextField
            id="eventTitle"
            name="eventTitle"
            label="Title"
            value={formik.values.eventTitle}
            onChange={formik.handleChange}
            error={
              formik.touched.eventTitle && Boolean(formik.errors.eventTitle)
            }
            helperText={formik.touched.eventTitle && formik.errors.eventTitle}
            variant="standard"
            fullWidth
          />
          <TextField
            id="eventDesc"
            name="eventDesc"
            label="Event Description"
            value={formik.values.eventDesc}
            onChange={formik.handleChange}
            error={formik.touched.eventDesc && Boolean(formik.errors.eventDesc)}
            helperText={formik.touched.eventDesc && formik.errors.eventDesc}
            variant="standard"
            multiline
            minRows={4}
            fullWidth
          />
          <div className="page-body event-drops">
            <div className="event-dropdown">
              <label htmlFor="eventType">Type of Event</label>
              <Select
                id="eventType"
                name="eventType"
                label="Type of Event"
                value={formik.values.eventType}
                onChange={formik.handleChange}
                native={false}
              >
                <MenuItem value="battle">Battle</MenuItem>
                <MenuItem value="social">Social</MenuItem>
                <MenuItem value="exploration">Exploration</MenuItem>
                <MenuItem value="mishap">Mishap</MenuItem>
                <MenuItem value="adventure">Adventure</MenuItem>
              </Select>
            </div>
            <div className="event-dropdown">
              <label htmlFor="heroic">Heroic Event?</label>
              <Switch
                name="heroic"
                id="heroic"
                label="Heroic Event?"
                value={formik.values.heroic}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="custom-buttons event-submit">
            <Button type="submit">Submit</Button>
            <Button onClick={props.closeModal}>Cancel</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
