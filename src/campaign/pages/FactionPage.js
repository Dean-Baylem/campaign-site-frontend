import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import MainNavigation from "../../shared/navigation/MainNavigation";
import FactionTitle from "../sections/FactionTitle";
import FactionBackground from "../sections/FactionBackground";
import FactionMembers from "../sections/FactionMembers";
import FactionRecords from "../sections/FactionRecords";
import Footer from "../../shared/Components/PageComponents/Footer";
import Modal from "../../shared/Components/UIComponents/Modal";
import FactionMemberSwitch from "../components/FactionMemberSwitch";
import FactionNoteForm from "../components/FactionNoteForm";
import { Button } from "@mui/material";
import "./FactionPage.css";

const FactionPage = () => {
  const factionId = useParams().factionId;
  const campaignId = useParams().campaignId;
  const [faction, setFaction] = useState({});
  const [loading, setLoading] = useState(true);

  const [currentMembers, setCurrentMembers] = useState([]);
  const [nonMembers, setNonMembers] = useState([]);
  const [memberModal, setMemberModal] = useState(false);

  const [noteModal, setNoteModal] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState({});
  const [editModal, setEditModal] = useState(false);


  const memberModalToggle = () => {
    setMemberModal(!memberModal);
  };

  const { sendRequest, error } = useHttpRequest();

  useEffect(() => {
    const fetchFaction = async () => {
      if (loading) {
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_REQUEST_URL +
              `/npc/faction/getbyid/${factionId}`
          );
          console.log(responseData.faction);
          setFaction(responseData.faction);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchFaction();
  }, [loading]);

  const handleModalClose = () => {
    memberModalToggle();
    setLoading(true);
  }

  
  const fetchNPCs = useCallback(
    async () => {
    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_REQUEST_URL +
          `/npc//npc/fetchbycampaign/${campaignId}`
      );
      let members = [];
      let nonMembers = [];
      for (let i=0; i < responseData.npcs.length; i++) {
        if (responseData.npcs[i].faction === factionId) {
          members.push(responseData.npcs[i]);
        } else {
          nonMembers.push(responseData.npcs[i]);
        }
      }
      setCurrentMembers(members);
      setNonMembers(nonMembers);
      memberModalToggle();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const noteModalToggle = () => {
    setNoteModal(!noteModal);
  }

  const editModalToggle = () => {
    setEditModal(!editModal);
  }

  const handleEditNote = (note) => {
    setNoteToEdit(note);
    editModalToggle();
  }

  return (
    !loading && (
      <React.Fragment>
        <MainNavigation />
        <FactionTitle faction={faction} />
        <FactionBackground faction={faction} />
        <FactionMembers fetchNPCs={fetchNPCs} faction={faction} />
        {memberModal && (
          <Modal modalHeader="Manage Faction Members">
            <FactionMemberSwitch
              fetchNPCs={fetchNPCs}
              members={currentMembers}
              nonMembers={nonMembers}
              closeModal={handleModalClose}
            />
          </Modal>
        )}
        {noteModal && (
          <Modal modalHeader="Add New Faction Note">
            <FactionNoteForm
              url={
                process.env.REACT_APP_REQUEST_URL +
                `/npc/faction/note/addnote/${faction._id}`
              }
              requestType="POST"
              reload={setLoading}
              setEditable={setNoteModal}
              closeButton={<Button onClick={noteModalToggle}>Cancel</Button>}
            />
          </Modal>
        )}
        {editModal && (
          <Modal modalHeader="Edit Faction Note">
            <FactionNoteForm
              url={
                process.env.REACT_APP_REQUEST_URL +
                `/npc/faction/note/${noteToEdit._id}/editnote/${faction._id}`
              }
              requestType="PATCH"
              reload={setLoading}
              setEditable={setEditModal}
              title={noteToEdit.title}
              note={noteToEdit.note}
              closeButton={<Button onClick={noteModalToggle}>Cancel</Button>}
            />
          </Modal>
        )}
        <FactionRecords
          handleEditNote={handleEditNote}
          noteModalToggle={noteModalToggle}
          faction={faction}
        />
        <Footer />
      </React.Fragment>
    )
  );
};

export default FactionPage;
