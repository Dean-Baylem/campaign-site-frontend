import React, {useState} from "react";
import Collapsible from "react-collapsible";
import "./PreviousRecaps.css";

const PreviousRecaps = () => {

    const [dropped, setDropped] = useState(false); 

  const DUMMY_RECAPS = [
    {
      title: "The sixth event",
      body: "lorem ipsum!!!",
      date: "June 6th 2023",
    },
    {
      title: "The fifth event",
      body: "lorem ipsum!!!",
      date: "May 31st 2023",
    },
    {
      title: "The fourth event",
      body: "lorem ipsum!!!",
      date: "May 24th 2023",
    },
    {
      title: "The third event",
      body: "lorem ipsum!!!",
      date: "May 17th 2023",
    },
    {
      title: "The second event",
      body: "lorem ipsum!!!",
      date: "May 10th 2023",
    },
    {
      title: "The first event",
      body: "lorem ipsum!!!",
      date: "May 6th 2023",
    },
  ];

  return (
    <div className="previous-recap-container dark-bg">
      <ul>
        {DUMMY_RECAPS.slice(1, 4).map((entry, index) => (
          <li
            key={index}
            className={`${
              index % 2 === 0 ? "light-bg recap-entry" : "dark-bg recap-entry"
            }`}
          >
            <h5 className="page-subtitle no-margin">{entry.title}</h5>
            <p className="page-body no-margin">{entry.date}</p>
          </li>
        ))}
      </ul>
      { DUMMY_RECAPS.length > 4 &&
      <div className="page-body event-collapsible">
        <Collapsible trigger="See More">
          <ul>
            {DUMMY_RECAPS.slice(4, DUMMY_RECAPS.length).map((entry, index) => (
              <li
                className={`${
                  index % 2 !== 0
                    ? "light-bg recap-entry"
                    : "dark-bg recap-entry"
                }`}
              >
                <h5 className="page-subtitle no-margin">{entry.title}</h5>
                <p className="no-margin">{entry.date}</p>
              </li>
            ))}
          </ul>
        </Collapsible>
      </div>
      }
    </div>
  );
};

export default PreviousRecaps;
