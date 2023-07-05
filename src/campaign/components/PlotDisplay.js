import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const DUMMY = [
    {act: 1, name: "Testing", description: "Here is a test 1", levelStart: 1, levelFinish: 3, ongoing: false,},
    {act: 2, name: "Test Again", description: "Here is a test 2", levelStart: 3, levelFinish: 5, ongoing: false,},
    {act: 3, name: "Test one more", description: "Here is a test 3", levelStart: 5, ongoing: false,},
]

const PlotDisplay = props => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {DUMMY.map((data, index) => (
              <Tab label={data.name} value={data.act} />
            ))}
          </TabList>
        </Box>
        {DUMMY.map((data, index) => (
          <TabPanel value={data.act}>{data.description}</TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}

export default PlotDisplay;
