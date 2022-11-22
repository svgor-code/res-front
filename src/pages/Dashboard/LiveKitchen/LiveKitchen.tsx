import React, {useState} from 'react';
import style from './LiveKitchen.module.css'
import imgKitchen from '../../../images/png/kitchen.png'
import cameraImg from '../../../images/svg/camera.svg'
import liveTag from '../../../images/svg/live-tag.svg'
import chef from '../../../images/svg/chef.svg'

const LiveKitchen = () => {
    const [camera, setCamera] = useState<string>("02")
    const [chefnumber, setChefnumber] = useState<string>("05")

    return (
        <div className={style.liveKitchen}>
                <span className={style.liveKitchen__name}>
                    Live Kitchen
                </span>
            <div className={style.liveKitchen__working}>

                <div className={style.liveKitchen__img}>
                    <img className={style.liveKitchen__imgLive} src={imgKitchen} alt="live kitchen"/>
                </div>

                <div className={style.liveKitchen__infoLive}>
                    <div className={style.liveKitchen__camera}>

                        <div className={style.liveKitchen__cameraBlock}>
                            <img src={cameraImg} alt="camera"/>
                        </div>
                        <div className={style.liveKitchen__cameraBlock}>
                            <img src={liveTag} alt="live"/>
                        </div>

                    </div>

                    <div className={style.liveKitchen__onlineTable}>

                        <div className={style.liveKitchen__number}>
                            <span className={style.liveKitchen__span}>{camera}</span>
                        </div>
                        <div className={style.liveKitchen__text}>
                            Cameras are working
                        </div>

                    </div>
                </div>

            </div>

            <div className={style.liveKitchen__chef}>
                <div className={style.liveKitchen__body}>
                    <div className={style.liveKitchen__chefImg}>
                        <img src={chef} alt="chef"/>
                    </div>
                    <div className={style.liveKitchen__chefOnline}>
                        <span className={style.liveKitchen__chefSpan}>{chefnumber}</span>
                    </div>
                    <div className={style.liveKitchen__chefWork}>
                        <span>Chef Working</span>
                    </div>
                </div>

                <div className={style.liveKitchen__body}>
                    <div className={style.liveKitchen__chefImg}>
                        <img src={chef} alt="chef"/>
                    </div>
                    <div className={style.liveKitchen__chefOnline}>
                        <span className={style.liveKitchen__chefSpan}>{chefnumber}</span>
                    </div>
                    <div className={style.liveKitchen__chefWork}>
                        <span>Chef Working</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LiveKitchen;