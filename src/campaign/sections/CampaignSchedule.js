import React from "react";
import { Button } from "@mui/material";
import "./CampaignSchedule.css";

const CampaignSchedule = () => {
  return (
    <div className="campaign-schedule-container">
      <div className="page-subtitle">
        <h3>Schedule & Recaps</h3>
      </div>
      <div className="page-body schedule-desc">
        <p>
          Scheduling is a crucial part of being a Game Master. After all, if
          nobody knows when the session starts, how can the session start?
          Therefore, the Party Resources department at Dungeon Delvers
          Incorporated has generated a scheduling system to ensure you never
          miss a session start!
        </p>
        <div className="schedule-banner card-light-bg">
          <div className="schedule-token">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1254/1254275.png?w=740&t=st=1686467454~exp=1686468054~hmac=d35245c8d933b300192117be1a792ac3b842f6191176a3cec3b7197874d42824"
              alt="schedule"
            />
          </div>
          <div className="page-body">
            <h5>Regular Game Time</h5>
            <p>Day | Time | TMZ</p>
          </div>
          <div className="page-body">
            <h5>Next Session</h5>
            <p>Details for next</p>
          </div>
        </div>
        </div>
        <div className="page-body">
        <p>
          In addition, we know that memory erasure over time is a problem that
          plagues every adventurer. Splash in the objectivity of each
          character's perspective of a situation, and the cognitive dissonance
          of the party will exponentially explode! Introducing the remedy to
          those symptoms, the session recap! After each session, party members
          can contribute their thoughts and opinions of transpired events.
          Navigate through past sessions using the handy drop-down to the side.
          Now the whole party will know what to blame when the plans inevitably
          fizzle into nothingness once more!
        </p>
      </div>
    </div>
  );
};

export default CampaignSchedule;
