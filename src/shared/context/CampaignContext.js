import { createContext } from "react";

export const CampaignContext = createContext({
    currentCampaign: null,
    changeCampaign: () => {}, 
});