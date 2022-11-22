import React, {useState} from 'react';
import style from './SalesGraph.module.css'
import dateImg from '../../../images/svg/date.svg'

const SalesGraph = () => {
    const [month, setMonth] = useState<string>('September')
    const [year, setYear] = useState<string>('2022')

    return (
        <div className={style.salesGraph}>
            <div className={style.salesGraph__block}>
                <div>
                    <span className={style.salesGraph__name}>
                   {month} {year}
                    </span>
                </div>
                <div className={style.salesGraph__date}>
                    <div className={style.salesGraph__text}>
                        Change date
                    </div>
                    <div>
                        <button className={style.salesGraph__button}>
                            <img src={dateImg} alt="date"/>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                salesGraph
            </div>

        </div>
    );
};

export default SalesGraph;