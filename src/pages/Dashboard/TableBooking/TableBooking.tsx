import React, {useState} from 'react';
import style from './TableBooking.module.css'

const TableBooking = () => {
    const [numberOne, setNumberOne] = useState<string>("12")
    const [numberTwo, setNumberTwo] = useState<string>("27")
    const [numberThree, setNumberThree] = useState<string>("02")

    return (
        <div className={style.tableBooking}>
                <span className={style.tableBooking__text}>
                    Online Table Booking
                </span>

            <div className={style.tableBooking__body}>

                <div className={style.tableBooking__number}>
                    <div>
                           <span className={style.tableBooking__span}>
                            {numberOne}
                        </span>
                    </div>
                    <div className={style.tableBooking__descr}>
                         <span>
                             Total Booking
                         </span>
                    </div>
                </div>

                <div className={style.tableBooking__number}>
                    <div>
                         <span className={style.tableBooking__span}>
                            {numberTwo}
                        </span>
                    </div>
                    <div className={style.tableBooking__descr}>
                         <span>
                             People
                         </span>
                    </div>
                </div>

                <div className={style.tableBooking__number}>
                    <div>
                         <span className={style.tableBooking__span}>
                            {numberThree}
                        </span>
                    </div>
                    <div className={style.tableBooking__descr}>
                         <span>
                             Special Request
                         </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TableBooking;