import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

import './Followers.scss';

const FollowersCard = (props) => {

    console.log('FollowersCard', props)

    return (
        <div className='follower-card'>
            <Card>
                <Image src={props.avatar} alt={props.login} />
                <Card.Content>
                    <Card.Header>{props.login}</Card.Header>
                    <a href={props.gitUrl}>
                        <Icon name='github' />
                        {props.gitUrl}  
                    </a>
                </Card.Content>
            </Card>
        </div>
    )
}

export default FollowersCard;