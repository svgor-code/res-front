import React from 'react';
import {styled} from "@mui/system";

const BlockTableDishes = styled('div')({
    minWidth: "405px",
    borderRadius: "6px",
    border: "0.5px solid #153453",
    background: "#081A2C",
    margin: "17px 0px 0px 18px",
    "@media (max-width:1900px)":{
        minWidth: "364px",
        margin: "15px 0px 0px 14px",
    }
});

const TableDishes = () => {
    return (
        <BlockTableDishes>

        </BlockTableDishes>
    );
};

export default TableDishes;