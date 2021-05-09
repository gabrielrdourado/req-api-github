import React from 'react';

import { Icon } from 'semantic-ui-react';
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from 'react-router-dom';

export default function CardUser(props){
    return (        
        <div>
            <img src={props.user.avatar_url} alt={props.user.name} />
            <h1>
                {props.user.name}
            </h1>
            <div>
                <span>
                    Data de registro: &nbsp;
                    {format(parseISO(props.user.created_at), 'dd/MM/yyyy', {locale: ptBR})}
                </span>
            </div>
            <div>
                <p>Repositórios Públicos</p>
                <span>{props.user.public_repos}</span>
                
                <Link to={`/repos/${props.user.login}`}>
                    Acessar &nbsp;<Icon name="chevron right"/>
                </Link>
            </div>
            <div>
                <div>
                    <p>Seguidores</p>
                    <span>
                        {props.user.followers} &nbsp;
                        <Icon name="user"/>
                    </span>
                </div>
                <div>
                    <p>Seguindo</p>
                    <span>
                        {props.user.following} &nbsp;
                        <Icon name="user"/>
                    </span>
                </div>
            </div>
        </div>        
    );
}