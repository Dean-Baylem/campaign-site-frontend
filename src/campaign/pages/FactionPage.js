import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import MainNavigation from "../../shared/navigation/MainNavigation";
import FactionTitle from "../sections/FactionTitle";
import FactionBackground from "../sections/FactionBackground";
import FactionMembers from "../sections/FactionMembers";
import FactionRecords from "../sections/FactionRecords";
import Footer from "../../shared/Components/PageComponents/Footer";
import "./FactionPage.css";



const FactionPage = () => {
  const factionId = useParams().factionId;
  const [faction, setFaction] = useState({});
  const [loading, setLoading] = useState(true);

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

  return (
    !loading && (
      <React.Fragment>
        <MainNavigation />
        <FactionTitle faction={faction} />
        <FactionBackground faction={faction} />
        <FactionMembers faction={faction} />
        <FactionRecords faction={faction} />
        <Footer />
      </React.Fragment>
    )
  );
};

export default FactionPage;
