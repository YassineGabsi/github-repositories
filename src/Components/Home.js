import React from "react";
import '../Assets/Home.scss';

export default function Home() {

    return (
        <div className={'home-container'}>

            <div className={'stars'}/>
            <div className={'stars-second'}/>
            <div className={'stars-third'}/>

            <div className={'home-title-container'}>
                <span>
                    Enter your GitHub name to get all the repositories
                </span>
                <input className={'home-input'} type="text" placeholder={'Ex: YassineGabsi'}/>

            </div>
        </div>
    );
}