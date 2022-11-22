import React, {useState} from 'react';
import style from './TableRecipe.module.css'
import ratingImg from '../../../images/svg/rating.svg'

const TableRecipe = () => {
    const items = [
        {number: "01", name: "Caper and chickpea pasta", rating: "4.5"},
        {number: "02", name: "Fish and pasta casserole", rating: "4.5"},
        {number: "03", name: "Squash and coconut bread", rating: "4.5"},
        {number: "04", name: "Squash and coconut bread", rating: "4.5"}
    ]

    const [veg, setVeg] = useState<string>("35")
    const [nonVeg, setNonVeg] = useState<string>("29")
    const [rating, setRating] = useState<string>("4.5")
    const [number, setNumber] = useState<string>("01")
    return (
        <div className={style.tableRecipe}>
            <span className={style.tableRecipe__name}>
                Todays Recipe/Dish
            </span>
            <div className={style.tableRecipe__blocks}>
                <div className={style.tableRecipe__veg}>
                    <div className={style.tableRecipe__numberVeg}>
                        <span>
                            {veg}
                        </span>
                    </div>
                    <div>
                        <span className={style.tableRecipe__text}>
                            Non-Veg Dishes
                        </span>
                    </div>
                </div>

                <div className={style.tableRecipe__nonVeg}>
                    <div className={style.tableRecipe__numberNonVeg}>
                        <span>
                            {nonVeg}
                        </span>
                    </div>
                    <div>
                        <span className={style.tableRecipe__text}>
                            Veg Dishes
                        </span>
                    </div>
                </div>

            </div>

            <span className={style.tableRecipe__info}>
                Popular Dishes
            </span>

            {items.map((el) =>
                <div className={style.tableRecipe__populars}>
                    <div className={style.tableRecipe__popular}>
                        <div className={style.tableRecipe__popularBlock}>
                            <div className={style.tableRecipe__popularItem}>
                            <span className={style.tableRecipe__popularSpan}>
                            {el.number}
                            </span>
                            </div>
                            <div className={style.tableRecipe__popularName}>
                            <span>
                            {el.name}
                            </span>
                            </div>
                        </div>

                        <div className={style.tableRecipe__popularImage}>
                            <div>
                                <img src={ratingImg} alt="rating"/>
                            </div>
                            <div className={style.tableRecipe__popularRating}>
                                {el.rating}
                            </div>
                        </div>
                    </div>

                    <div className={style.tableRecipe__line}></div>
                </div>
            )}

            <div className={style.tableRecipe__viewAll}>
                <button className={style.tableRecipe__button}>
                    View All
                </button>
            </div>
        </div>
    );
};

export default TableRecipe;