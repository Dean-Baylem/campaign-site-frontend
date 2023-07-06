import React, {useContext} from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
  const [value, setValue] = React.useState(1);

  const campaignManager = useContext(CampaignContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleEditClick = (data) => {
    props.handleEdit(data);
  }

  const handleDeleteClick = (data) => {
    props.handleDelete(data)
  }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            background: "#EBD8B2",
          }}
        >
          <TabList
            textColor="#000000"
            indicatorColor="success"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            {campaignManager.currentCampaign.plots.map((data, index) => (
              <Tab label={data.name} value={data.act} />
            ))}
          </TabList>
        </Box>
        {campaignManager.currentCampaign.plots.map((data, index) => (
          <TabPanel
            sx={{
              height: "30vh",
              background: "#fae6be",
              borderRadius: "0 0 18px 18px",
            }}
            value={data.act}
          >
            <p>{data.description}</p>
            <div className="edit-icons-bottom">
              <IconButton onClick={() => handleEditClick(data)}>
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={() => handleDeleteClick(data)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}

export default PlotDisplay;
