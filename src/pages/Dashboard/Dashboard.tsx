import React from "react";
import style from './Dashboard.module.css'
import NewOrders from "./NewOrders/NewOrders";
import ProcessOrders from "./ProcessOrders/ProcessOrders";
import DeliveredOrders from "./DeliveredOrders/DeliveredOrders";
import TableBooking from "./TableBooking/TableBooking";
import LiveKitchen from "./LiveKitchen/LiveKitchen";
import SalesGraph from "./SalesGraph/SalesGraph";
import TableDetalis from "./TableDetalis/TableDetalis";
import TableRecipe from "./TableRecipe/TableRecipe";
import TableDishes from "./TableDishes/TableDishes";

const Dashboard = () => {

    return (
        <div className={style.dashboard}>

            <div className={style.dashboardGrid}>

                <div className={style.dashboard__upBlock}>
                    <NewOrders/>

                    <ProcessOrders/>

                    <DeliveredOrders/>

                    <TableBooking/>

                    <LiveKitchen/>
                </div>

                <div className={style.dashboard__downBlock}>
                    <SalesGraph/>

                    <TableDetalis/>

                    <TableRecipe/>

                    <TableDishes/>
                </div>


            </div>
        </div>
    );
};

export default Dashboard;
