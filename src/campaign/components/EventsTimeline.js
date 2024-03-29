import React, { useContext, useState } from "react";
import { CampaignContext } from "../../shared/context/CampaignContext";
import { AuthContext } from "../../shared/context/auth-context";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TimelineDot from "@mui/lab/TimelineDot";
import Modal from "../../shared/Components/UIComponents/Modal";
import EventForm from "../components/EventForm";
import "./EventsTimeline.css";
import DeleteModal from "../../shared/Components/UIComponents/DeleteModal";

const EventsTimeline = (props) => {
  const campaignManager = useContext(CampaignContext);
  const auth = useContext(AuthContext);
  const [editEvent, setEditEvent] = useState(false);
  const [eventToEdit, setEventToEdit] = useState({});
  const [deleteEvent, setDeleteEvent] = useState(false);
  const [eventToDelete, setEventToDelete] = useState({});

  const battleImg =
    "https://cdn-icons-png.flaticon.com/512/1043/1043547.png?w=900&t=st=1683941548~exp=1683942148~hmac=a22bd33d3952cc12c0d357b965ff32690626709f17679c93d7874437991aa6ae";
  const socialImg =
    "https://cdn-icons-png.flaticon.com/512/1253/1253339.png?w=900&t=st=1683941577~exp=1683942177~hmac=bfc4ab12eef6f6a0d9558a18ea83a4b5e2cc68f425417c33e8a54fb0deaea1b9";
  const explortationImg =
    "https://cdn-icons-png.flaticon.com/512/784/784384.png?w=900&t=st=1683941659~exp=1683942259~hmac=b518bf21b571805ae10d9541ae049518739651d8a87e31d607d5e05f6812d86a";
  const discoverImg =
    "https://cdn-icons-png.flaticon.com/512/1021/1021357.png?w=900&t=st=1683941647~exp=1683942247~hmac=c8465ecf3aa747ee4d91838715806c32d3e61cfc7b497a7ee2ba93decd038ffc";
  const mishapImg =
    "https://cdn-icons-png.flaticon.com/512/1150/1150175.png?w=900&t=st=1683941684~exp=1683942284~hmac=d8482121c5ad3e5616dd61ba95e612dbcca0d4c0cb4d18d45db494b3b5f9c27d";

  const toggleEditModal = () => {
    setEditEvent(!editEvent);
  };

  const toggleDeleteModal = () => {
    setDeleteEvent(!deleteEvent);
  };

  const handleEditClick = (event) => {
    setEventToEdit(event);
    toggleEditModal();
  };

  const handleDeleteClick = (event) => {
    setEventToDelete(event);
    toggleDeleteModal();
  };

  return (
    <React.Fragment>
      {editEvent && (
        <Modal modalHeader="Edit Event">
          <EventForm
            url={
              process.env.REACT_APP_REQUEST_URL +
              `/campaign/events/updatebyid/${eventToEdit.id}`
            }
            eventTitle={eventToEdit.eventTitle}
            eventDesc={eventToEdit.eventDesc}
            eventType={eventToEdit.eventType}
            heroic={eventToEdit.heroic}
            requestType="PATCH"
            reload={props.reload}
            setEditable={setEditEvent}
            closeModal={toggleEditModal}
          />
        </Modal>
      )}
      {deleteEvent && (
        <Modal modalHeader="Delete Event?">
          <DeleteModal
            url={
              process.env.REACT_APP_REQUEST_URL +
              `/campaign/events/deletebyid/${eventToDelete.id}`
            }
            reload={props.reload}
            modalToggle={toggleDeleteModal}
          />
        </Modal>
      )}
      <div className="events-timeline-container">
        <Timeline position="alternate">
          {campaignManager.currentCampaign.events.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator sx={{ padding: "0 1rem 0 1rem" }}>
                <TimelineDot sx={{ bgcolor: "#00000000", boxShadow: "0" }}>
                  <img
                    src={
                      event.eventType === "battle"
                        ? battleImg
                        : event.eventType === "social"
                        ? socialImg
                        : event.eventType === "exploration"
                        ? explortationImg
                        : event.eventType === "mishap"
                        ? mishapImg
                        : event.eventType === "adventure"
                        ? discoverImg
                        : ""
                    }
                    alt="event-type-token"
                    style={{ height: "100px" }}
                  />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  backgroundColor: "#EBD8B2",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 15px -4px",
                  border: "1px solid",
                  padding: "0",
                }}
              >
                <div className="tab-details">
                  <p className="event-tab-title">
                    <strong>{event.eventTitle}</strong>
                  </p>
                  <p className="event-tab-details">{event.eventDesc}</p>
                  {auth.playerId ===
                    campaignManager.currentCampaign.gameMaster.id && (
                    <div
                      className={
                        index % 2 === 0 ? "edit-icons-right" : "edit-icons-left"
                      }
                    >
                      <IconButton onClick={() => handleEditClick(event)}>
                        <EditIcon fontSize="sm" />
                      </IconButton>
                      <IconButton onClick={() => handleDeleteClick(event)}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </div>
                  )}
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </React.Fragment>
  );
};

export default EventsTimeline;
