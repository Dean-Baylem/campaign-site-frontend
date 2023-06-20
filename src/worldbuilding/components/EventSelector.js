import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { useHttpRequest } from "../../shared/hooks/request-hook";
import {
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Button,
} from "@mui/material";
import "./EventSelector.css";
import ErrorModal from "../../shared/Components/UIComponents/ErrorModal";

const EventSelector = (props) => {
  const [events, setEvents] = useState([]);
  const [heroicEvents, setHeroicEvents] = useState([]);
  const [deselectedEvents, setDeselectedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { sendRequest, error, clearError } = useHttpRequest();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const responseData = await sendRequest(props.url);
        setEvents(responseData.events);
        let hEvents = await responseData.events.filter((event) => event.heroic);
        let defaultHEvents = [];
        for (let i = 0; i < hEvents.length; i++) {
          defaultHEvents.push(hEvents[i].id);
        }
        setHeroicEvents(defaultHEvents);
        setLoading(false);
      } catch (err) {}
    };
    fetchEvents();
  }, []);

  const handleSubmit = async (e) => {
    try {
      await sendRequest(
        "http://localhost:5000/campaign/events/changeheroicevents",
        "PATCH",
        JSON.stringify({ toHeroic: heroicEvents, nonHeroic: deselectedEvents }),
        { "Content-Type": "application/json" }
      );
      await props.loadEvents(true);
      props.modalToggal();
    } catch (err) {
    }
    e.preventDefault();
  };

  const handleChange = async (e) => {
    if (e.target.checked) {
      setHeroicEvents([...heroicEvents, e.target.value]);
      setDeselectedEvents(
        deselectedEvents.filter((event) => event !== e.target.value)
      );
    } else {
      setDeselectedEvents([...deselectedEvents, e.target.value]);
      setHeroicEvents(heroicEvents.filter((event) => event !== e.target.value));
    }
  };

  return (
    <React.Fragment>
      {error && <ErrorModal modalToggle={clearError} error={error} />}
      <div className="event-selector-container">
        {loading && (
          <div className="modal-loading">
            <CircularProgress sx={{ width: "250px", height: "250px" }} />
          </div>
        )}
        <div className="heroic-event-form-container">
          <CSSTransition
            in={!loading}
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            <form
              className="heroic-event-form page-body"
              onSubmit={handleSubmit}
            >
              <FormGroup>
                {events.map((event, index) => (
                  <FormControlLabel
                    control={<Checkbox defaultChecked={event.heroic} />}
                    label={event.eventTitle}
                    value={event.id}
                    key={index}
                    onChange={handleChange}
                  />
                ))}
              </FormGroup>
              <div className="button-list event-select-buttons custom-buttons">
                <Button type="submit">Submit</Button>
                <Button onClick={props.modalToggle}>Close</Button>
              </div>
            </form>
          </CSSTransition>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EventSelector;
