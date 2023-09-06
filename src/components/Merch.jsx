import React from "react";
import PropTypes from "prop-types";

function Merch(props){
    
    return (
        <React.Fragment>
            <h2>Item: &#128375;</h2>
            <h3>{props.itemName}</h3>
            <h3>{props.itemSize}</h3>
            <h4>{props.itemQuantity}</h4>
        </React.Fragment>
    );
}

Merch.propTypes = {
    itemName: PropTypes.string.isRequired,
    itemSize: PropTypes.string.isRequired,
    itemQuantity: PropTypes.number.isRequired
};

export default Merch;