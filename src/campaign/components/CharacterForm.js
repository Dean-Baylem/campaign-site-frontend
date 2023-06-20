import React, { useContext } from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import "./CharacterForm.css";

const validationSchema = yup.object({
  name: yup
    .string("Enter character name.")
    .required("Please input a character name."),
  species: yup
    .string("Enter character species")
    .required("Please input character species."),
  age: yup.number("Please input character age").positive(),
  playerClass: yup
    .string("Please put in character's class")
    .required("Please input character class"),
  level: yup.number("Input character level").positive(),
  subclass: yup.string("What subclass will the character progress too?"),
  appearance: yup
    .string("Please provde a description of character appearance")
    .max(200),
  description: yup.string("Please write a description"),
});

const CharacterForm = (props) => {
  const { sendRequest } = useHttpRequest();
  const campaignManager = useContext(CampaignContext);
  const auth = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      name: props.name || "",
      species: props.species || "",
      age: props.age || 0,
      playerClass: props.playerClass || "",
      subclass: props.subclass || "",
      level: props.level || 1,
      appearance: props.appearance || "",
      description: props.description || "",
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
            age: values.age,
            playerClass: values.playerClass,
            subclass: values.subclass,
            level: values.level,
            appearance: values.appearance,
            description: values.description,
          }),
          {
            "Content-Type": "application/json",
          }
        );
      } catch (err) {
      }
      if (props.reload) {
        await props.reload(true);
      }
      if (props.setEditable) {
        props.setEditable(false);
      }
    },
  });

  return (
    <div className="character-form-container">
      <form onSubmit={formik.handleSubmit}>
        <div className="character-form">
          <input className="file-upload-box" type="file"></input>
          <TextField
            id="name"
            name="name"
            label="Character Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            variant="standard"
          />
          <TextField
            id="species"
            name="species"
            label="Character Species"
            value={formik.values.species}
            onChange={formik.handleChange}
            error={formik.touched.species && Boolean(formik.errors.species)}
            helperText={formik.touched.species && formik.errors.species}
            variant="standard"
          />
          <TextField
            id="playerClass"
            name="playerClass"
            label="Character Class"
            value={formik.values.playerClass}
            onChange={formik.handleChange}
            error={
              formik.touched.playerClass && Boolean(formik.errors.playerClass)
            }
            helperText={formik.touched.playerClass && formik.errors.playerClass}
            variant="standard"
          />
          <TextField
            id="subclass"
            name="subclass"
            label="Character Subclass"
            value={formik.values.subclass}
            onChange={formik.handleChange}
            error={formik.touched.subclass && Boolean(formik.errors.subclass)}
            helperText={formik.touched.subclass && formik.errors.subclass}
            variant="standard"
          />
          <TextField
            id="level"
            name="level"
            label="Character Level"
            value={formik.values.level}
            onChange={formik.handleChange}
            error={formik.touched.level && Boolean(formik.errors.level)}
            helperText={formik.touched.level && formik.errors.level}
            variant="standard"
            type="number"
          />
          <TextField
            id="age"
            name="age"
            label="Character Age"
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
            variant="standard"
            type="number"
          />
          <TextField
            multiline
            minRows="4"
            id="appearance"
            name="appearance"
            label="Appearance (200 character limit)"
            value={formik.values.appearance}
            onChange={formik.handleChange}
            error={
              formik.touched.appearance && Boolean(formik.errors.appearance)
            }
            helperText={formik.touched.appearance && formik.errors.appearance}
            variant="standard"
            sx={{ gridArea: "4 / 1 / span 1 / span 2" }}
          />
          <TextField
            multiline
            minRows="4"
            id="description"
            name="description"
            label="Description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
            variant="standard"
            sx={{ gridArea: "4 / 3 / span 1 / span 2" }}
          />
        </div>
        <div className="custom-buttons button-list">
          <Button type="submit">Submit</Button>
          {props.closeButton}
        </div>
      </form>
    </div>
  );
};

export default CharacterForm;
