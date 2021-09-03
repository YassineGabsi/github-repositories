import React, {useEffect, useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import axios from 'axios';

import '../Assets/Repositories.scss';
import {faStar, faUsers, faEnvelope, faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Repository from "./Repository";
import Loader from "react-loader-spinner";


export default function Repositories() {

    const [githubUser, setGithubUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [filteredRepos, setFilteredRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {user} = useParams();
    const history = useHistory();

    useEffect(() => {
        /**
         * When the component mounts, it fetches the user infos and
         * the repositories of the given users through these functions
         * - getUser : fetches the user infos from the Github API
         * - getRepos : fetches the user repositories from the Github API
         */
        getUser();
        getRepos();
    }, []);

    /**
     * On changing the search input value, this function is called.
     * It's responsible of filtering the repos using the specific repo name
     * - searchLabel: the search repos name
     * - tempRepos: a temporary array to get the filtered repos from the original set of repos
     * - setFilteredRepos() : sets the new array of repos
     */
    function searchRepo(e)  {
        const searchLabel = e.target.value.toLowerCase();
        if (searchLabel === '') {
            setFilteredRepos(repos);
        } else {
            const tempRepos = repos.filter(repo => repo.name.toLowerCase().includes(searchLabel));
            setFilteredRepos(tempRepos)
        }

    }

    const getUser = () => {
        axios.get(`https://api.github.com/users/` + user)
            .then(res => {
                setGithubUser(res.data);
            })
            .catch(error => {
                history.push('/404');
            });
    }

    const getRepos = () => {
        axios.get(`https://api.github.com/users/` + user + '/repos')
            .then(res => {
                setRepos(res.data);
                setFilteredRepos(res.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            {isLoading ? (
                <Loader
                    className={'spinner'}
                    type="Rings"
                    color="#e85c66"
                    height={100}
                    width={100}
                />
            ) : (
                <div className={'repos-container'}>
                    <div className={'container'}>
                        <div className={'user-infos-container col-md-3 col-12 me-4'}>
                            <div className={'user-avatar-container'}>
                                <img className={'user-avatar img-fluid'} src={githubUser.avatar_url} alt=""/>
                            </div>
                            <div className={'user-infos'}>
                                <div className={'user-name'}>{githubUser.name}</div>
                                <div className={'underline-decoration my-2'}/>

                                <div className={'user-login'}>{githubUser.login}</div>
                                <div className={'user-bio'}>{githubUser.bio}</div>

                                <div className={'user-followers-container'}>
                                    <div className={'user-followers'}>
                                        <FontAwesomeIcon className={'icon-followers me-3'} icon={faUsers} color={'#000000'}/>
                                        <span className={'fw-bold me-1'}> {githubUser.followers}</span>
                                        followers
                                    </div>
                                    <div className={'user-following'}>
                                        <FontAwesomeIcon className={'icon-followers me-3'} icon={faUsers} color={'#000000'}/>
                                        <span className={'fw-bold me-1'}>{githubUser.following}</span>
                                        following
                                    </div>
                                    <div className={'user-stars'}>
                                        <FontAwesomeIcon className={'icon-followers me-3'} icon={faStar} color={'#000000'}/>
                                        <span className={'fw-bold me-1'}>{githubUser.following}</span>
                                    </div>
                                </div>

                                <div className={'users-links-container'}>
                                    {githubUser.email &&
                                    <div className={'user-email'}>
                                        <FontAwesomeIcon className={'me-3'} icon={faEnvelope} color={'#000000'}/>
                                        {githubUser.email}
                                    </div>}

                                    {githubUser.blog &&
                                    <div className={'user-website'}>
                                        <FontAwesomeIcon className={'me-3'} icon={faLink} color={'#000000'}/>
                                        <a href={githubUser.blog}>{githubUser.blog}</a>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div className={'user-repos-container col-md-9 col-12'}>
                            <div className={'user-repos-header'}>
                                <div className={'text-container'}>
                                    <div className={'text'}>
                                        Repositories
                                    </div>
                                    <div className={'underline-decoration'}/>
                                </div>
                            </div>

                            <div className={'search-input-container mt-3'}>
                                <input className={'search-input'}
                                       onChange={(e) => searchRepo(e)}
                                       type="text"
                                       placeholder={'Find a repository...'}/>
                            </div>

                            <div className={'repositories-container'}>
                                {
                                    filteredRepos.length ? (
                                        filteredRepos.map(repo => <Repository key={repo.id} repo={repo}/> )
                                    ) : (
                                        <div className={'no-repos'}>No repositories found.</div>
                                    )
                                }
                                {}
                            </div>
                        </div>
                    </div>
                </div>

            )}

        </div>
    );
}