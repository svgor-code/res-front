import React from 'react';
import {styled} from "@mui/system";

const BlockTableBooking = styled('div')({
    minWidth: "448px",
    borderRadius:"6px",
    border: "0.5px solid #153453",
    background: "#081A2C",
    margin: "17px 0px 0px 18px",
    "@media (max-width:1900px)":{
        minWidth: "400px",
        margin: "15px 0px 0px 14px",
    }
});

const TableBooking = () => {
    return (
        <BlockTableBooking>

        </BlockTableBooking>
    );
};

export default TableBooking;