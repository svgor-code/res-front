import React, {useState} from 'react';
import style from "./DeliveredOrders.module.css";

const DeliveredOrders = () => {
    const [number, setNumber] = useState("07")

    return (
        <div className={style.deliveredOrders}>
            <div className={style.deliveredOrders__info}>
                <span className={style.deliveredOrders__number}>
                {number}
                </span>
            </div>

            <div className={style.deliveredOrders__block}>
                <div className={style.deliveredOrders__blockOpacity}>
                     <span className={style.deliveredOrders__span}>
                    Order Delivered
                    </span>
                </div>
            </div>

            <div className={style.deliveredOrders__descr}>
                    <span className={style.deliveredOrders__descrSpan}>
                    All online incoming orders through app and website
                </span>
            </div>

            <div className={style.deliveredOrders__viewAll}>
                <button className={style.deliveredOrders__button}>
                    View All
                </button>
            </div>

        </div>
    );
};

export default DeliveredOrders;