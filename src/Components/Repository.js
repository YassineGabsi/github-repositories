import React, {useEffect, useState} from "react";
import '../Assets/Repository.scss';
import {faProjectDiagram, faCertificate} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Repository(props) {

    /**
     * The date fetched from the Github API is in YYYY-MM-DD HH:MM:SS
     * In that case, the date should be formatted in a readable format
     * This function ( formatDate ) is responsible of formatting the date
     */

    const formatDate = (date) => {
        const  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const dateFormatted = new Date(date)
        return dateFormatted.getDay() + ' ' +  months[dateFormatted.getMonth()];
    }

    return (
        <div className={'repo-card'}>
            <a className={'repo-name'} href={'https://github.com/' + props.repo.owner.login + '/' + props.repo.name} target='_blank'>
                {props.repo.name}
            </a>

            <div className={'repo-description'}>
                {props.repo.description}
            </div>

            <div className={'repo-card-footer mt-2'}>
                {
                    props.repo.language && <div className={'repo-language me-3 d-flex align-items-center justify-content-center'}>
                        <span className={'circle-language'}/>
                        {props.repo.language}
                    </div>
                }

                {
                    props.repo.forks > 0 ?  <div className={'repo-forks'}>
                        <FontAwesomeIcon className={'icon-followers me-2'} icon={faProjectDiagram} color={'#000000'} size={'sm'}/>
                        {props.repo.forks}
                    </div> : null
                }

                {
                    props.repo.license && <div className={'repo-licence'}>
                        <FontAwesomeIcon className={'icon-followers me-2'} icon={faCertificate} color={'#000000'} size={'sm'}/>
                        {props.repo.license.name}
                    </div>
                }

                <div className={'repo-updated-on'}>
                    Updated at {formatDate(props.repo.updated_at)}
                </div>
            </div>

            <div className={'hr-container'}>
                <hr className={'hr-element'}/>
            </div>
        </div>
    );
}