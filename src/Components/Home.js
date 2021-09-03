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

        /**
         *  This event listener enables the search on clicking on "Enter' button.
         */

        const input = document.getElementsByClassName('home-input')[0];

        input.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
                const button = document.getElementsByClassName('btn-search')[0];
                button.click();
            }
        })
    }, []);

    /**
     * After giving the username of the github page, this function redirects
     * to the appropriate github repositories for that user .
     * We are using the react built-in 'useHistory' function to make the redirection
     */

    const redirectToGithubRepositories = () => {
        if (githubUser !== '') history.push('/repositories/' + githubUser);
    }

    return (
        <div className={'home-container'}>

            {/**
             * These divs are to display the background animation in the home page
             * ( the animated stars in the background )
             * there is 3 layers of stars, each layer has its own pace of speed.
             */}
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