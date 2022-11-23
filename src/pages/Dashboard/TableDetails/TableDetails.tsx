import React from 'react';
import {styled} from "@mui/system";

const BlockTableDetails = styled('div')({
    minWidth: "317px",
    borderRadius: "6px",
    border: "0.5px solid #153453",
    background: "#081A2C",
    margin: "17px 0px 0px 18px",
    "@media (max-width:1900px)":{
        minWidth: "275px",
        margin: "15px 0px 0px 14px",
    }
});

const TableDetails = () => {
    return (
        <BlockTableDetails>

        </BlockTableDetails>
    );
};

export default TableDetails;