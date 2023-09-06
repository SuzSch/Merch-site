import React from "react";
import Merch from "./Merch";

const currentMerchList = [
    {
        itemName: 'Baby Tee',
        itemSize: 'Medium',
        itemQuantity: '12'
    },
    {
        itemName: 'Adult Tee',
        itemSize: 'Large',
        itemQuantity: '2'
    }
]


function MerchList(){
    return (
        <React.Fragment>
        <hr/>
        {currentMerchList.map((merch, index) =>
            <Merch itemName={merch.itemName}
                itemSize={merch.itemSize}
                itemQuantity={merch.itemQuantity}
                key={index} />
                )}
    </React.Fragment>
    );
        }

export default MerchList;