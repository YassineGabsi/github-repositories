import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import '../Assets/Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {

    const [githubUser, setGithubUser] = useState('');
    const history = useHistory();

    useEffect(() => {
        const input = document.getElementsByClassName('home-input')[0];
        console.log(input);

        input.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
                const button = document.getElementsByClassName('btn-search')[0];
                button.click();
            }
        })
    }, []);

    const redirectToGithubRepositories = () => {
        if (githubUser !== '') history.push('/repositories/' + githubUser);
    }

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
                    <input className={'home-input'} type="text" placeholder={'Ex: YassineGabsi'} onChange={(e) => setGithubUser(e.target.value)}/>
                    <div className={'search-icon-container'}>
                        <FontAwesomeIcon className={'search-icon'} icon={ faSearch } color={'#192330'} />
                    </div>
                </div>

                <button className={'btn-custom btn-search'} onClick={redirectToGithubRepositories}>
                    Start searching !
                </button>

            </div>
        </div>
    );
}