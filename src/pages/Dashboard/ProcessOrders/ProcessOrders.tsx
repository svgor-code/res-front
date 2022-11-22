import React, {useState} from 'react';
import style from "./ProcessOrders.module.css";

const ProcessOrders = () => {
    const [number, setNumber] = useState<number>(12)

    return (
        <div className={style.processOrders}>

            <div className={style.processOrders__info}>
                <span className={style.processOrders__number}>
                {number}
                </span>
            </div>

            <div className={style.processOrders__block}>
                <span className={style.processOrders__span}>
                    On Process Orders
                </span>
            </div>

            <div className={style.processOrders__descr}>
                    <span className={style.processOrders__descrSpan}>
                    All online incoming orders through app and website
                </span>
            </div>

            <div className={style.processOrders__viewAll}>
                <button className={style.processOrders__button}>
                    View All
                </button>
            </div>

        </div>
    );
};

export default ProcessOrders;