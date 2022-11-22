import React, {useState} from 'react';
import style from "./NewOrders.module.css";
import notifactionSVG from "../../../images/svg/notifaction.svg";

const NewOrders = () => {
    const [number, setNumber] = useState<string>("25")

    return (
        <div className={style.newOrders}>

            <div className={style.newOrders__table}>

                <div className={style.newOrders__info}>

                    <div className={style.newOrders__infoSpan}>
                                <span className={style.newOrders__span}>
                                    New Orders
                                </span>
                    </div>

                    <div className={style.newOrders__img}>
                        <img src={notifactionSVG} alt="notifaction"/>
                    </div>

                </div>

                <div className={style.newOrders__number}>

                            <span className={style.newOrders__number_span}>
                                {number}
                            </span>

                </div>

            </div>

            <div className={style.newOrders__descr}>

                    <span className={style.newOrders__descrSpan}>
                    All online incoming orders through app and website
                </span>
            </div>

            <div className={style.newOrders__viewAll}>
                <button className={style.newOrders__button}>
                    View All
                </button>
            </div>

        </div>
    );
};

export default NewOrders;