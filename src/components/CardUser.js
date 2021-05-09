import React from 'react';

import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Dataconvert from '../services/Dataconvert';
import { CardUserStyle, PrimaryButton } from '../styles';

export default function CardUser(props){
    const user = props.user

    return (        
        <CardUserStyle>
            <div className="container">
                <img src={user.avatar_url} alt={user.name} />
            </div>            
            <div className="card-header">
                <h3>
                    {user.name}
                </h3>
                <span>
                    Data de registro: &nbsp;
                    {Dataconvert(user.created_at)}
                </span>
            </div>
            <div className="card-body">
                <h5>Repositórios Públicos</h5>
                <Link to={`/repos/${user.login}`}>
                    <PrimaryButton>
                    <span>{user.public_repos}&nbsp;</span><Icon name="chevron right"/>
                    </PrimaryButton>
                </Link>
            </div>
            <div className="card-details">
                <div>
                    <p>Seguidores</p>
                    <span>
                        {user.followers} &nbsp;
                        <Icon name="user"/>
                    </span>
                </div>
                <div>
                    <p>Seguindo</p>
                    <span>
                        {user.following} &nbsp;
                        <Icon name="user"/>
                    </span>
                </div>
            </div>
        </CardUserStyle>        
    );
}