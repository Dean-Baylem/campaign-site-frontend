import React from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";

const MainNavigation = props => {
    return (
        <React.Fragment>
            <MainHeader clear={props.clear}>
                    <p>D D Inc.</p>
                <nav>
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation;