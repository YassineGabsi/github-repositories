import React from "react";
import '../Assets/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {

    return (
        <div className={'home-container'}>

            <div className={'stars'}/>
            <div className={'stars-second'}/>
            <div className={'stars-third'}/>
            <div className={'github-icon-container'} >
                <FontAwesomeIcon className={'github-icon'}  icon={ faGithub } color={'white'} size={'10x'} />
            </div>

            <div className={'home-title-container'}>
                <span>
                    Enter your GitHub name to get all the repositories
                </span>
                <div className={'home-input-container'}>
                    <input className={'home-input'} type="text" placeholder={'Ex: YassineGabsi'}/>
                    <FontAwesomeIcon className={'search-icon'} icon={ faSearch } color={'#192330'} />
                </div>

                <button className={'btn-custom btn-search'}>
                    Start searching !
                </button>

            </div>
        </div>
    );
}