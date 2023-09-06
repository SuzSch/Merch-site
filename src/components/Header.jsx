import React from "react";
import hornsImage from "./../img/horns.jpg"

function Header(){
    return(
        <React.Fragment>
        <h1>Spinaltrap Merch Store</h1>
        <img src={hornsImage}/>
        </React.Fragment>
    );
}

export default Header;