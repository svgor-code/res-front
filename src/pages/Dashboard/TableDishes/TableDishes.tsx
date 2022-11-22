import React, {useState} from 'react';
import style from './TableDishes.module.css'
import portionImg from '../../../images/png/portion.png'

const TableDishes = () => {
    const [vegGreen, setVegGreen] = useState<string>("12")
    const [vegBlue, setVegBlue] = useState<string>("43")
    return (
        <div className={style.tableDishes}>
            <span className={style.tableRecipe__name}>
                Today’s Offered Dishes
            </span>
            <div className={style.tableDishes__blocks}>
                <div className={style.tableDishes__green}>
                    <div className={style.tableDishes__greenNumber}>
                        <span>{vegGreen}</span>
                    </div>
                    <div className={style.tableDishes__greenSpan}>
                        <span>Veg Dishes</span>
                    </div>
                </div>

                <div className={style.tableDishes__blue}>
                    <div className={style.tableDishes__blueNumber}>
                        <span>{vegBlue}</span>
                    </div>
                    <div className={style.tableDishes__blueSpan}>
                        <span>Veg Dishes</span>
                    </div>
                </div>
            </div>

            <div className={style.tableDishes__portions}>
                <div className={style.tableDishes__portionsHeader}>

                    <div className={style.tableDishes__portionsBody}>
                        <div className={style.tableDishes__portionImg}>
                            <img src={portionImg} alt="portion"/>
                        </div>
                        <div className={style.tableDishes__portionName}>
                            <span>
                                Caper and chickpea pasta
                            </span>
                        </div>
                    </div>

                    <div className={style.tableDishes__portionBlock}>
                            <span className={style.tableDishes__spanNumber}>
                                50
                            </span>
                            <span className={style.tableDishes__portionInfo}>
                                Portion
                            </span>
                    </div>

                </div>

                <div className={style.tableDishes__line}></div>

            </div>

            <div className={style.tableDishes__portions}>
                <div className={style.tableDishes__portionsHeader}>

                    <div className={style.tableDishes__portionsBody}>
                        <div className={style.tableDishes__portionImg}>
                            <img src={portionImg} alt="portion"/>
                        </div>
                        <div className={style.tableDishes__portionName}>
                            <span>
                                Caper and chickpea pasta
                            </span>
                        </div>
                    </div>

                    <div className={style.tableDishes__portionBlock}>
                            <span className={style.tableDishes__spanNumber}>
                                50
                            </span>
                        <span className={style.tableDishes__portionInfo}>
                                Portion
                            </span>
                    </div>

                </div>

                <div className={style.tableDishes__line}></div>

            </div>

            <div className={style.tableDishes__portions}>
                <div className={style.tableDishes__portionsHeader}>

                    <div className={style.tableDishes__portionsBody}>
                        <div className={style.tableDishes__portionImg}>
                            <img src={portionImg} alt="portion"/>
                        </div>
                        <div className={style.tableDishes__portionName}>
                            <span>
                                Caper and chickpea pasta
                            </span>
                        </div>
                    </div>

                    <div className={style.tableDishes__portionBlock}>
                            <span className={style.tableDishes__spanNumber}>
                                50
                            </span>
                        <span className={style.tableDishes__portionInfo}>
                                Portion
                            </span>
                    </div>

                </div>

                <div className={style.tableDishes__line}></div>

            </div>

            <div className={style.tableDishes__viewAll}>
                <button className={style.tableDishes__button}>
                    View All
                </button>
            </div>


        </div>
    );
};

export default TableDishes;