import React from 'react';
import {styled} from "@mui/system";

const BlockDeliveredOrders = styled('div')({
    minWidth: "255px",
    borderRadius: "6px",
    border: "0.5px solid #153453",
    background: "#081A2C",
    margin: "17px 0px 0px 18px"
});

const DeliveredOrders = () => {
    return (
        <BlockDeliveredOrders>

        </BlockDeliveredOrders>
    );
};

export default DeliveredOrders;