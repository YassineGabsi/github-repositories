import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import '../Assets/Repositories.scss';
import {faStar, faUsers, faEnvelope, faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Repositories() {

    const [githubUser, setGithubUser] = useState({});

    const { user } = useParams();

    useEffect(() => {
        console.log(user);
        getUser();

    }, []);

    const getUser = () => {
        axios.get(`https://api.github.com/users/` + user)
            .then(res => {
                setGithubUser(res.data);
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const getRepos = () => {
        axios.get(`https://api.github.com/users/` + user + '/repos')
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
      <div className={'repos-container'}>
          <div className={'container'}>
              <div className={'user-infos-container col-3 me-'}>
                  <div className={'user-avatar-container'}>
                      <img className={'user-avatar img-fluid'} src={githubUser.avatar_url} alt=""/>
                  </div>
                  <div className={'user-infos'}>
                      <div className={'user-name'}>{githubUser.name}</div>
                      <div className={'user-login'}>{githubUser.login}</div>
                      <div className={'user-bio'}>{githubUser.bio}</div>

                      <div className={'user-followers-container'}>
                          <div className={'user-followers'}>
                              <FontAwesomeIcon className={'icon-followers me-3'} icon={ faUsers } color={'#000000'}  />
                              <span className={'fw-bold me-1'}> {githubUser.followers}</span>
                              followers
                          </div>
                          <div className={'user-following'}>
                              <FontAwesomeIcon className={'icon-followers me-3'} icon={ faUsers } color={'#000000'}  />
                              <span className={'fw-bold me-1'}>{githubUser.following}</span>
                              following
                          </div>
                          <div className={'user-stars'}>
                              <FontAwesomeIcon className={'icon-followers me-3'} icon={ faStar } color={'#000000'}  />
                              <span className={'fw-bold me-1'}>{githubUser.following}</span>
                          </div>
                      </div>

                      <div className={'users-links-container'}>
                          {githubUser.email &&
                          <div className={'user-email'}>
                              <FontAwesomeIcon className={'me-3'} icon={ faEnvelope } color={'#000000'}  />
                              {githubUser.email}
                          </div>}

                          {githubUser.blog &&
                          <div className={'user-website'}>
                              <FontAwesomeIcon className={'me-3'} icon={ faLink } color={'#000000'}  />
                              <a href={githubUser.blog}>{githubUser.blog}</a>
                          </div>}
                      </div>
                  </div>
              </div>
              <div className={'user-repos-container col-9'}>

              </div>
          </div>
      </div>
    );
}