import React from "react";


const  Navbar = () => {
    return (
        <nav className={"nav"}>
            <div className={"nav_text"}>
                <a>Profile</a>
            </div>
            <div className={"nav_text"}>
                <a>Messages</a>
            </div>
            <div className={"nav_text"}>
                <a>News</a>
            </div>
            <div className={"nav_text"}>
                <a>Music</a>
            </div>
            <div className={"nav_text"}>
                <a>Setting</a>
            </div>
        </nav>
    );
}
export default Navbar;