import React from "react";


export default function Navbar(props) {
    return(
        <nav className={props.darkMode ? "dark": ""}>           
        <img 
            className="nav--logo_icon"
            src="./assets/react-icon-small.png"
    />
            <h3>ReactFacts</h3>

            <div className="toggler"
             onClick={props.toggleDarkMode}
            >
                <p className="toggler-light">Light</p>
                <div className="toggler-slider">
                    <div className="toggler-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
        </nav>
    )
}