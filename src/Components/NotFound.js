import React from "react";
import '../Assets/NotFound.scss';
import {useHistory} from "react-router-dom";

export default function NotFound() {

    const history = useHistory();

    const goHome = () => {
        history.push('/')
    }

    return (
        <div className={'not-found-container d-flex justify-content-center align-items-center'}>
            <div className={'not-found-label text-center'}>
                Oops! Sorry this user doesn't exist!
            </div>
            <button className={'btn-custom'} onClick={goHome}>
                Search again !
            </button>
        </div>
    );
}