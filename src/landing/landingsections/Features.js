import React from "react";
import "./Features.css";
import LogoCard from "../../shared/Components/PageComponents/LogoCard"

const Features = props => {
    return (
      <section className="features-section">
        <h2 className="page-subtitle">Design & Develop</h2>
        <div className="highlight-container">
          <LogoCard
            img="https://cdn-icons-png.flaticon.com/512/1067/1067713.png?w=900&t=st=1681955514~exp=1681956114~hmac=7853326cc21fd962b6c8e9b42f557957da4e04748e096124f56bac93353c706c"
            heading="Build"
            desc="Flesh out your world with entries categorised into easy to manage groups."
          />
          <LogoCard
            img="https://cdn-icons-png.flaticon.com/512/1033/1033015.png?w=900&t=st=1682206183~exp=1682206783~hmac=47c269e2f5bedbfe1e0770065076ed70b4917e69c973f983b89596fe2a4d6e25"
            heading="Share"
            desc="Enhance the immersion for your party by sharing your world with them"
          />
          <LogoCard
            img="https://cdn-icons-png.flaticon.com/512/1033/1033005.png?w=900&t=st=1682206190~exp=1682206790~hmac=962194dcc83bea87c9084f2e84572250f2dbcaa1d75554b9063932200ebef710"
            heading="Manage"
            desc="Keep track of your game easily with the ever expanding group of tools available to the Dungeon Delvers."
          />
        </div>
      </section>
    );
}

export default Features;