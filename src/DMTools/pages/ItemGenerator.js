import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  Radio,
  RadioGroup,
  FormLabel,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { useHttpRequest } from "../../shared/hooks/request-hook";

import "./ItemGenerator.css";

const ItemGenerator = () => {
  const [itemList, setItemList] = useState([]);
  const { error, sendRequest } = useHttpRequest();
  const [displayItems, setDisplayItems] = useState([]);

  const validationSchema = yup.object({
    numberItems: yup
      .number("Enter number of items")
      .required("Please input number of items"),
    itemType: yup
      .string("Choose an item type")
      .required("Please choose an item type"),
    itemRarity: yup
      .string("Choose an item rarity")
      .required("Please choose and item rarity"),
  });

  const formik = useFormik({
    initialValues: {
      numberItems: 0,
      itemType: "",
      itemRarity: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/tools/getItems",
          "POST",
          JSON.stringify({
            numberItems: values.numberItems,
            itemType: values.itemType,
            itemRarity: values.itemRarity,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        console.log(responseData);
        setItemList(responseData);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const allItemTypes = [
    "Armor",
    "Potion",
    "Ring",
    "Rod",
    "Scroll",
    "Staff",
    "Wand",
    "Weapon",
    "Wondrous",
  ];


  return (
    <div className="item-generator-page">
      <div className="random-item-container">
        <h5>Random Item Generator</h5>
        <form onSubmit={formik.handleSubmit} className="item-gen-form">
          <div className="num-rarity-section">
            <FormControl variant="standard" sx={{ maxWidth: 175 }}>
              <div className="text-field">
                <TextField
                  id="item-number"
                  label="Number of Items"
                  type="number"
                  name="numberItems"
                  variant="standard"
                  value={formik.values.numberItems}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.numberItems &&
                    Boolean(formik.errors.numberItems)
                  }
                  helperText={
                    formik.touched.numberItems && formik.errors.numberItems
                  }
                />
              </div>
            </FormControl>
            <FormControl variant="standard" sx={{ maxWidth: 175 }}>
              <InputLabel id="type-select-label">Item Type</InputLabel>
              <Select
                sx={{ margin: "0px" }}
                labelId="type-select-label"
                label="Item Type"
                name="itemType"
                value={formik.values.itemType}
                onChange={formik.handleChange}
                error={
                  formik.touched.itemType && Boolean(formik.errors.itemType)
                }
                helperText={formik.touched.itemType && formik.errors.itemType}
              >
                {allItemTypes.map((type, index) => (
                  <MenuItem value={type} key={index}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="select-field">
            <FormLabel id="rarity-label">Rarity</FormLabel>
            <RadioGroup
              aria-labelledby="rarity-label"
              defaultValue="Uncommon"
              id="rarity"
              name="itemRarity"
              value={formik.values.itemRarity}
              onChange={formik.handleChange}
              error={
                formik.touched.itemRarity && Boolean(formik.errors.itemRarity)
              }
              helperText={formik.touched.itemRarity && formik.errors.itemRarity}
            >
              <FormControlLabel
                value="Common"
                control={<Radio />}
                label="Common"
              />
              <FormControlLabel
                value="Uncommon"
                control={<Radio />}
                label="Uncommon"
              />
              <FormControlLabel value="Rare" control={<Radio />} label="Rare" />
              <FormControlLabel
                value="Very Rare"
                control={<Radio />}
                label="Very Rare"
              />
              <FormControlLabel
                value="Legendary"
                control={<Radio />}
                label="Legendary"
              />
            </RadioGroup>
          </div>
          <Button
            variant="contained"
            sx={{ gridArea: "2 / 1 / span 1 / span 2", margin: "0% 20%" }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ItemGenerator;
