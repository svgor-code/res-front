import React from "react";
import {styled} from '@mui/system';
import NewOrders from "./NewOrders/NewOrders";
import ProcessOrders from "./ProcessOrders/ProcessOrders";
import DeliveredOrders from "./DeliveredOrders/DeliveredOrders";
import TableBooking from "./TableBooking/TableBooking";
import LiveKitchen from "./LiveKitchen/LiveKitchen";
import SalesGraph from "./SalesGraph/SalesGraph";
import TableDetails from "./TableDetails/TableDetails";
import TableRecipe from "./TableRecipe/TableRecipe";
import TableDishes from "./TableDishes/TableDishes";

const ContainerDashboard = styled('div')({
    minHeight: "93vh",
    backgroundColor: '#030f1c',
});

const DashboardGrid = styled('div')({
    marginLeft: "180px"
});

const DashboardUpBlock = styled('div')({
    display: "flex",
    minHeight: "294px"
});

const DashboardDownBlock = styled('div')({
    display: "flex",
    minHeight: "617px",
    "@media (max-width:1900px)":{
        minHeight: "550px",
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
