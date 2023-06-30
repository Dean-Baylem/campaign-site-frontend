import React, { useContext, useState } from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Backdrop from "../Components/UIComponents/Backdrop";
import NavDrawer from "./NavDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <React.Fragment>
      {openModal && <Backdrop onClick={toggleModal} />}
      <NavDrawer show={openModal} onClick={toggleModal}>
        <nav>
          <ul className="modal-nav-links">
            <NavLinks drawerOpen={openModal}/>
          </ul>
        </nav>
      </NavDrawer>
      <MainHeader clear={props.clear}>
        <div className="page-subtitle">
          <p>Dungeon Delvers Incorporated</p>
        </div>
        <nav>
          <ul className="nav-links">
            <li onClick={toggleModal} className="burger">
              <FontAwesomeIcon icon={faBars} size="small" />
            </li>
            <div className={openModal ? "hide" : "nav-item-list"}>
              <NavLinks openModal={openModal} toggleModal={toggleModal} />
            </div>
          </ul>
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
