import React from "react";
import SideCard from "../../shared/Components/UIComponents/SideCard";
import Card from "../../shared/Components/UIComponents/Card";
import "./DisplaySection.css";

const DisplaySection = () => {
    return (
      <div className="display-section">
        <div className="card-display">
          <SideCard
            cardType="right-side"
            imgSrc="https://img.freepik.com/free-vector/attributes-knight-compositions_1284-34731.jpg?w=740&t=st=1682206403~exp=1682207003~hmac=dc6ac7fdc8ebff9eafd420bed53e91fde354c2ce7ff4a3eeac229a7364404a67"
          >
            <h5>Forge links across worlds and campaigns</h5>
            <p>
              The worldbuilding tools allow for creator to keep track of various
              aspects of their world split into easy to handle sections.
            </p>
          </SideCard>
          <SideCard
            cardType="left-side"
            imgSrc="https://img.freepik.com/free-vector/attributes-knight-compositions_1284-34731.jpg?w=740&t=st=1682206403~exp=1682207003~hmac=dc6ac7fdc8ebff9eafd420bed53e91fde354c2ce7ff4a3eeac229a7364404a67"
          >
            <h5>Forge links across worlds and campaigns</h5>
            <p>
              The worldbuilding tools allow for creator to keep track of various
              aspects of their world split into easy to handle sections.
            </p>
          </SideCard>
          <Card imgSrc="https://img.freepik.com/free-vector/attributes-knight-compositions_1284-34731.jpg?w=740&t=st=1682206403~exp=1682207003~hmac=dc6ac7fdc8ebff9eafd420bed53e91fde354c2ce7ff4a3eeac229a7364404a67">
            <h5>Forge links across worlds and campaigns</h5>
            <p>
              The worldbuilding tools allow for creator to keep track of various
              aspects of their world split into easy to handle sections.
            </p>
          </Card>
        </div>
      </div>
    );
}

export default DisplaySection;