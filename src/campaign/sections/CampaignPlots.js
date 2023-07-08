import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./CampaignPlots.css";
import EventsTimeline from "../components/EventsTimeline";
import { CampaignContext } from "../../shared/context/CampaignContext";
import { AuthContext } from "../../shared/context/auth-context";
import PlotDisplay from "../components/PlotDisplay";
import PlotForm from "../components/PlotForm";
import Modal from "../../shared/Components/UIComponents/Modal";
import { Button, useThemeProps } from "@mui/material";
import DeleteModal from "../../shared/Components/UIComponents/DeleteModal";
import EventForm from "../components/EventForm";

const CampaignPlots = (props) => {
  const campaignManager = useContext(CampaignContext);
  const auth = useContext(AuthContext);
  const [createPlotModal, setCreatePlotModal] = useState(false);
  const [createEvent, setCreateEvent] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [actToDelete, setActToDelete] = useState({});
  const [actToEdit, setActToEdit] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);

  const campaignId = useParams().campaignId;

  const handleCreateModal = () => {
    setCreatePlotModal(!createPlotModal);
  };

  const handleCreateEventModal = () => {
    setCreateEvent(!createEvent);
  }

  const editModalToggle = () => {
    setEditModal(!editModal);
  };

  const deleteModalToggle = () => {
    setDeleteModal(!deleteModal);
  };

  const handleEditClick = (data) => {
    setActToEdit(data);
    editModalToggle();
  };

  const handleDeleteClick = (data) => {
    setActToDelete(data);
    deleteModalToggle();
  };

  return (
    <React.Fragment>
      {createPlotModal && (
        <Modal modalHeader="Create Plot Act">
          <PlotForm
            url={
              process.env.REACT_APP_REQUEST_URL +
              `/campaign/createplot/${campaignId}`
            }
            requestType="POST"
            setEditable={setCreatePlotModal}
            reload={props.reload}
            closeModal={handleCreateModal}
          />
        </Modal>
      )}
      {editModal && (
        <Modal modalHeader="Edit Plot Act">
          <PlotForm
            act={actToEdit.act}
            name={actToEdit.name}
            description={actToEdit.description}
            levelStart={actToEdit.levelStart}
            levelFinish={actToEdit.levelFinish}
            ongoing={actToEdit.ongoing}
            visible={actToEdit.visible}
            url={
              process.env.REACT_APP_REQUEST_URL +
              `/campaign/updateplot/${actToEdit._id}`
            }
            requestType="PATCH"
            closeModal={editModalToggle}
            reload={props.reload}
          />
        </Modal>
      )}
      {createEvent && (
        <Modal modalHeader="Create New Events">
          <EventForm
            url={
              process.env.REACT_APP_REQUEST_URL +
              `/campaign/events/add/${campaignId}`
            }
            requestType="POST"
            setEditable={setCreateEvent}
            reload={props.reload}
            closeModal={handleCreateEventModal}
            />
        </Modal>
      )}
      {deleteModal && (
        <Modal modalHeader="Delete Plot Act">
          <DeleteModal
            url={
              process.env.REACT_APP_REQUEST_URL +
              `/campaign/deletePlot/${actToDelete._id}`
            }
            reload={props.reload}
            modalToggle={deleteModalToggle}
          />
        </Modal>
      )}
      <div className="campaign-plots-container light-bg">
        <h3 className="page-subtitle">Campaign Plot</h3>
        <div className="plot-synopsis-container">
          <div className="plot-synopsis padding-1 page-body custom-buttons">
            <p>
              A combination of Game Master preparation and party shenanigans
              results in a complicated web of events that form the campaign
              plot. Often these plots are categorized identically to a play in
              acts. Using the handy tab system developed by the curators of
              Dungeon Delvers Incorporated, the Game Master can document and
              record these events for easy viewing.
            </p>
            <Button variant="outlined" onClick={handleCreateModal}>
              New Act
            </Button>
          </div>
          <div className="campaign-plot-img">
            <img
              src="https://cdn-icons-png.flaticon.com/512/683/683836.png?w=740&t=st=1686459158~exp=1686459758~hmac=82de5fd7ab8afbbc6cb80295a836e0535d34d7a3c4493524b7218bb0e180234c"
              alt="Campaign-token"
            />
          </div>
        </div>
        <div className="plot-summary">
          <div className="plot-summary-text">
            {campaignManager.currentCampaign.plots.length === 0 ? (
              <div>
                <p>The archives are empty! Start building today!</p>
                <Button onClick={handleCreateModal}>Create Act</Button>
              </div>
            ) : (
              <PlotDisplay
                handleDelete={handleDeleteClick}
                handleEdit={handleEditClick}
              />
            )}
          </div>
        </div>
        <div className="plot-timeline">
          <div className="page-subtitle">
            <h3>Timeline of events</h3>
          </div>
          <div className="timeline-desc page-body">
            <p>
              Written into the pages of history is the series of quests the
              world's adventurers have embarked upon. Clearing dungeons of
              dangerous foes, nervously parlaying with grumpy giants, walking
              the fine line of court conversations with kings and rogues alike.
              Watch the timeline grow ever more as your deeds are recorded by
              the scribes of Dungeon Delvers Incorporated!
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/9339/9339960.png"
              alt="event-desc-icon"
            />
          </div>
          {auth.playerId === campaignManager.currentCampaign.gameMaster.id && (
            <div className="custom-buttons center">
              <Button onClick={handleCreateEventModal}>New Event</Button>
            </div>
          )}
          <EventsTimeline reload={props.reload}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CampaignPlots;
