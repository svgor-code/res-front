import React, {useState} from 'react';
import style from './TableDetalis.module.css'
import dateImg from "../../../images/svg/date.svg";
import warningImg from "../../../images/svg/warning.svg";

const TableDetalis = () => {
    const [earnings, setEarnings] = useState<string>("$400")
    const [refund, setRefund] = useState<string>("$20")

    return (
        <div className={style.tableDetalis}>

            <span className={style.tableDetalis__name}>
                All Earning Details
            </span>

            <div className={style.tableDetalis__date}>

                <div className={style.tableDetalis__text}>
                    Change date
                </div>

                <div>
                    <button className={style.tableDetalis__buttonImg}>
                        <img src={dateImg} alt="date"/>
                    </button>
                </div>
            </div>

            <div className={style.tableDetalis__body}>

                <div className={style.tableDetalis__total}>
                    <div className={style.tableDetalis__span}>
                        <span>
                            Total Earnings this Month
                        </span>
                    </div>
                    <div className={style.tableDetalis__click}>
                        <button className={style.tableDetalis__button}>
                            view all details
                        </button>
                    </div>
                </div>

                <div className={style.tableDetalis__number}>
                    <span className={style.tableDetalis__numberSpan}>
                        {earnings}
                    </span>
                </div>

            </div>

            <div className={style.tableDetalis__line}></div>

            <div className={style.tableDetalis__body}>

                <div className={style.tableDetalis__total}>
                    <div className={style.tableDetalis__span}>
                        <span>
                            Total refund this Month
                        </span>
                    </div>
                    <div className={style.tableDetalis__click}>
                        <button className={style.tableDetalis__button}>
                            view all details
                        </button>
                    </div>
                </div>

                <div className={style.tableDetalis__numberRed}>
                    <span className={style.tableDetalis__numberSpanRed}>
                        {refund}
                    </span>
                </div>

            </div>

            <div className={style.tableDetalis__line}></div>

            <div className={style.tableDetalis__info}>
                <div>
                    <img src={warningImg} alt="warning"/>
                </div>
                <div className={style.tableDetalis__text}>
                    <p className={style.tableDetalis__textInfo}>
                        Payment defaults. Completely predominate cross-unit ideas for transparent customer service.
                        Assertively iterate enterprise-wide internal or "organic" sources.
                    </p>
                </div>
            </div>

        </div>

    );
};

export default TableDetalis;