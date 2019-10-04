import React from 'react';
import FollowersCard from './FollowersCard.js'

import './Followers.scss';

const FollowersList = (props) => {

    console.log('FollowersList', props.followersData)
    
    return (
        <div className='follower-wrapper'>
            
            {props.followersData.map(item => {
                return <FollowersCard key={item.id}
                                      avatar={item.avatar_url}
                                      login={item.login}
                                      gitUrl={item.html_url}

                       />
            })}
        </div>
    )
}

export default FollowersList;