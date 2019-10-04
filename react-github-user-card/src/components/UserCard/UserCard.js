import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import './UserCard.scss';

const UserCard = (props) => {

    return (
        <div className='user-wrapper'>
            <Card>
                <Image src={props.userData.avatar_url} alt={props.userData.name} />
                <Card.Content>
                    <Card.Header>{props.userData.login}</Card.Header>
                    <Card.Meta>{props.userData.name}</Card.Meta>
                    <Card.Meta>{props.userData.location}</Card.Meta>
                    <Card.Description>{props.userData.bio}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href={props.userData.url}>
                        <Icon name='github' />
                        {props.userData.html_url}
                    </a>
                </Card.Content>
            </Card>
        </div>
    )
}

export default UserCard;