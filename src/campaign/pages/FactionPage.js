import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import MainNavigation from "../../shared/navigation/MainNavigation";
import FactionTitle from "../sections/FactionTitle";
import FactionBackground from "../sections/FactionBackground";
import FactionMembers from "../sections/FactionMembers";
import FactionRecords from "../sections/FactionRecords";
import Footer from "../../shared/Components/PageComponents/Footer";
import "./FactionPage.css";
import FactionMemberSwitch from "../components/FactionMemberSwitch";

const FactionPage = () => {
  const factionId = useParams().factionId;
  const campaignId = useParams().campaignId;
  const [faction, setFaction] = useState({});
  const [loading, setLoading] = useState(true);

  const [currentMembers, setCurrentMembers] = useState([]);
  const [nonMembers, setNonMembers] = useState([]);
  const [memberModal, setMemberModal] = useState(false);


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

  return (
    !loading && (
      <React.Fragment>
        <MainNavigation />
        <FactionTitle faction={faction} />
        <FactionBackground faction={faction} />
        <FactionMembers fetchNPCs={fetchNPCs} faction={faction} />
        <FactionMemberSwitch fetchNPCs={fetchNPCs} members={currentMembers} nonMembers={nonMembers}/>
        <FactionRecords faction={faction} />
        <Footer />
      </React.Fragment>
    )
  );
};

export default FactionPage;
