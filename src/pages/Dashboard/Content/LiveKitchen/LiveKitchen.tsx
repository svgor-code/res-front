import React from 'react';
import {styled} from "@mui/system";

const BlockLiveKitchen = styled('div')({
    Width: "100%",
    borderRadius: "6px",
    border: "0.5px solid #153453",
    background: "#081A2C",
    margin: "17px 0px 0px 18px",
    "@media (max-width:1900px)":{
        minWidth: "364px",
        margin: "15px 0px 0px 14px",
    }
});

const LiveKitchen = () => {
    return (
        <BlockLiveKitchen>
            
        </BlockLiveKitchen>
    );
};

export default LiveKitchen;