import React from "react";
import {styled} from '@mui/system';
import NewOrders from "./Content/NewOrders/NewOrders";
import ProcessOrders from "./Content/ProcessOrders/ProcessOrders";
import DeliveredOrders from "./Content/DeliveredOrders/DeliveredOrders";
import TableBooking from "./Content/TableBooking/TableBooking";
import LiveKitchen from "./Content/LiveKitchen/LiveKitchen";
import SalesGraph from "./Content/SalesGraph/SalesGraph";
import TableDetails from "./Content/TableDetails/TableDetails";
import TableRecipe from "./Content/TableRecipe/TableRecipe";
import TableDishes from "./Content/TableDishes/TableDishes";

const ContainerDashboard = styled('div')({
    minHeight: "calc(100vh - 64px)",
    backgroundColor: '#030f1c',
});

const DashboardGrid = styled('div')({
    marginLeft: "184px"
});

const DashboardUpBlock = styled('div')({
    display: "flex",
    minHeight: "320px"
});

const DashboardDownBlock = styled('div')({
    display: "flex",
    minHeight: "617px",
    "@media (max-width:1900px)":{
        minHeight: "525px",
    }
});


const Dashboard = () => {

    return (
        <ContainerDashboard>

            <DashboardGrid>

                <DashboardUpBlock>
                    <NewOrders/>

                    <ProcessOrders/>

                    <DeliveredOrders/>

                    <TableBooking/>

                    <LiveKitchen/>
                </DashboardUpBlock>

                <DashboardDownBlock>
                    <SalesGraph/>

                    <TableDetails/>

                    <TableRecipe/>

                    <TableDishes/>
                </DashboardDownBlock>

            </DashboardGrid>

        </ContainerDashboard>
    );
};

export default Dashboard;
