import React, { useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Switch } from "@mui/material";
import "./NPCForm.css";

const validationSchema = yup.object({
  name: yup.string("Please enter NPC Name").required("Please enter NPC Name"),
  species: yup
    .string("Please write NPC species")
    .required("Please write NPC species"),
  occupation: yup.string(
    "If occupation known, please provide. If unknown / mystery, leave blank."
  ),
  age: yup.number("Provide age if known, leave as 0 if unknown"),
  appearance: yup
    .string("Please provide a brief description, upto 150 characters")
    .max(151, "Character Limit Reached"),
  notes: yup.string("Write details about the NPC known to the players"),
  secretNotes: yup.string("Write details hidden from the players"),
});

const NPCForm = (props) => {
  const { sendRequest } = useHttpRequest();
  const auth = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      name: props.name || "",
      species: props.species || "",
      occupation: props.occupation || "",
      age: props.age || 0,
      appearance: props.appearance || "",
      notes: props.notes || "",
      secretNotes: props.secretNotes || "",
      villain: props.villain || false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await sendRequest(
          props.url,
          props.requestType,
          JSON.stringify({
            name: values.name,
            species: values.species,
            occupation: values.occupation,
            age: values.age,
            appearance: values.appearance,
            notes: values.notes,
            secretNotes: values.secretNotes,
            villain: values.villain,
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
      if (props.setEditable(false));
    },
  });

  return (
    <div className="npc-form-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="npc-form">
          <TextField
            id="name"
            name="name"
            label="NPC Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            variant="standard"
          />
          <TextField
            id="species"
            name="species"
            label="NPC Species"
            value={formik.values.species}
            onChange={formik.handleChange}
            error={formik.touched.species && Boolean(formik.errors.species)}
            helperText={formik.touched.species && formik.errors.species}
            variant="standard"
          />
          <TextField
            id="occupation"
            name="occupation"
            label="NPC Occupation"
            value={formik.values.occupation}
            onChange={formik.handleChange}
            error={
              formik.touched.occupation && Boolean(formik.errors.occupation)
            }
            helperText={formik.touched.occupation && formik.errors.occupation}
            variant="standard"
          />
          <TextField
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            id="age"
            name="age"
            label="NPC Age"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
            variant="standard"
          />
          <div className="switch-input">
            <label htmlFor="villain">Villain</label>
            <Switch
              name="villain"
              id="villain"
              label="villain"
              value={formik.values.villain}
              onChange={formik.handleChange}
            />
          </div>
          <TextField
            multiline
            minRows={2}
            id="appearance"
            name="appearance"
            label="NPC Appearance"
            value={formik.values.appearance}
            onChange={formik.handleChange}
            error={
              formik.touched.appearance && Boolean(formik.errors.appearance)
            }
            helperText={formik.touched.appearance && formik.errors.appearance}
            variant="standard"
          />
          <TextField
            multiline
            minRows={4}
            id="notes"
            name="notes"
            label="NPC Notes"
            value={formik.values.notes}
            onChange={formik.handleChange}
            error={formik.touched.notes && Boolean(formik.errors.notes)}
            helperText={formik.touched.notes && formik.errors.notes}
            variant="standard"
          />
          <TextField
            multiline
            minRows={4}
            id="secretNotes"
            name="secretNotes"
            label="NPC Secret Notes"
            value={formik.values.secretNotes}
            onChange={formik.handleChange}
            error={
              formik.touched.secretNotes && Boolean(formik.errors.secretNotes)
            }
            helperText={formik.touched.secretNotes && formik.errors.secretNotes}
            variant="standard"
          />
        </div>
        <div className="custom-buttons form-sub">
          <Button type="submit">Submit</Button>
          <Button onClick={props.closeModal}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default NPCForm;