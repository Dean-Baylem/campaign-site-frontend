import React, { useContext, useEffect, useState } from "react";
import WorldHeading from "../../worldbuilding/components/WorldHeading";
import MainNavigation from "../../shared/navigation/MainNavigation";
import { CampaignContext } from "../../shared/context/CampaignContext";
import { AuthContext } from "../../shared/context/auth-context";
import { useParams } from "react-router-dom";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import CampaignTitle from "../components/CampaignTitle";
import CampaignTitleDetails from "../components/CampaignTitleDetails";
import CampaignPartyDetails from "../sections/CampaignPartyDetails";
import CampaignPlots from "../sections/CampaignPlots";
import CampaignFactions from "../sections/CampaignFactions";
import CampaignNPCs from "../sections/CampaignNPCs";
import CampaignSchedule from "../sections/CampaignSchedule";
import CampaignRecaps from "../sections/CampaignRecaps";
import Footer from "../../shared/Components/PageComponents/Footer";
import MyCharacters from "../sections/MyCharacters";
import CharacterForm from "../components/CharacterForm";
import Modal from "../../shared/Components/UIComponents/Modal";
import { Button, useThemeProps } from "@mui/material";
import "../components/PlayerCharacter.css";
import DeleteModal from "../../shared/Components/UIComponents/DeleteModal";
import ObjectivesManager from "../components/ObjectivesManager";

const CampaignMainPage = () => {
  const campaignId = useParams().campaignId;
  const campaignManager = useContext(CampaignContext);
  const [loadCampaign, setLoadCampaign] = useState(true);
  const [characterModal, setCharacterModal] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState(false);
  const [characterToEdit, setCharacterToEdit] = useState();
  const auth = useContext(AuthContext);

  const { sendRequest, error } = useHttpRequest();

  useEffect(() => {
    const fetchCampaign = async () => {
      if (loadCampaign) {
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_REQUEST_URL + `/campaign/findone/${campaignId}`
          );
          campaignManager.changeCampaign(responseData.campaign);
          setLoadCampaign(false);
        } catch (err) {}
      }
    };
    fetchCampaign();
  }, [loadCampaign]);

  const deleteModalToggle = () => {
    setCharacterToDelete(false);
  }

  return (
    !loadCampaign && (
      <React.Fragment>
        {characterModal && (
          <Modal modalHeader="Character Creation">
            <CharacterForm
              url={process.env.REACT_APP_REQUEST_URL + `/character/new-character/${auth.playerId}/${campaignManager.currentCampaign._id}`}
              requestType="POST"
              reload={setLoadCampaign}
              setEditable={setCharacterModal}
              closeButton={
                <Button onClick={() => setCharacterModal(false)}>Cancel</Button>
              }
            />
          </Modal>
        )}
        {characterToEdit && (
          <Modal modalHeader="Edit Character">
            <CharacterForm
              url={process.env.REACT_APP_REQUEST_URL + `/character/update-character/${characterToEdit._id}`}
              requestType="PATCH"
              reload={setLoadCampaign}
              setEditable={setCharacterToEdit}
              name={characterToEdit.name}
              species={characterToEdit.species}
              age={characterToEdit.age}
              playerClass={characterToEdit.playerClass}
              subclass={characterToEdit.subclass}
              level={characterToEdit.level}
              appearance={characterToEdit.appearance}
              desciption={characterToEdit.description}
              closeButton={
                <Button onClick={() => setCharacterToEdit(false)}>
                  Cancel
                </Button>
              }
            />
          </Modal>
        )}
        {characterToDelete && (
          <Modal modalHeader="Delete Character?">
            <DeleteModal
              url={process.env.REACT_APP_REQUEST_URL + `/character/delete-character/${characterToDelete._id}`}
              reload={setLoadCampaign}
              modalToggle={deleteModalToggle}
            />
          </Modal>
        )}
        <WorldHeading campaignBanner="https://img.freepik.com/free-photo/night-sky-glows-with-galaxy-mystical-silhouette-generative-ai_188544-11287.jpg?w=740&t=st=1683673772~exp=1683674372~hmac=acf8320765bcf7ad15d1d41e15153bd5eee319981a0adef75f39431a66221ec5">
          <MainNavigation clear={true} />
          <CampaignTitle />
          <CampaignTitleDetails />
        </WorldHeading>
        \
        {auth.isLoggedIn && (
          <MyCharacters
            reload={setLoadCampaign}
            setCharacterToDelete={setCharacterToDelete}
            setCharacterToEdit={setCharacterToEdit}
            setCharacterModal={setCharacterModal}
          />
        )}
        <CampaignPartyDetails reload={setLoadCampaign} />
        <CampaignPlots />
        <CampaignFactions />
        <CampaignNPCs />
        <CampaignSchedule />
        <CampaignRecaps />
        <CharacterForm />
        <ObjectivesManager reload={setLoadCampaign} />
        <Footer />
      </React.Fragment>
    )
  );
};

export default CampaignMainPage;
