import React, {useState} from 'react';
import { Icon } from 'semantic-ui-react';
import Dataconvert from '../services/Dataconvert';
import { CardReposStyle, PrimaryButton } from '../styles';

import Modal from './Modal';

export default function CardRepo(props){
    const repo = props.Repo
    const [isModalShow, setIsModalShow] = useState(false);

    return(
        <div>
            <CardReposStyle onClick={()=>setIsModalShow(true)}>{repo.name}</CardReposStyle>
            {isModalShow ? (
                <Modal onClose={()=>setIsModalShow(false)} id={`modal-${repo.id}`}>
                    <h2>{repo.name}</h2>

                    {repo.created_at != null ? (
                        <p>
                            Criado em: &nbsp;
                            {Dataconvert(repo.created_at)}
                        </p>
                    ): null}   

                    {repo.updated_at != null ? (
                        <p>
                            Última atualização: &nbsp;
                            {Dataconvert(repo.updated_at)}
                        </p>
                    ): null}                 
                    
                    {repo.stargazers_count != null ? (
                        <p>
                            Stars: &nbsp;
                            {repo.stargazers_count}
                        </p>
                    ): null}   

                    {repo.forks_count != null ? (
                        <p>
                            Forks: &nbsp;
                            {repo.forks_count}
                        </p>
                    ): null}   
                    
                    {repo.language != null ? (
                        <p>
                            Linguagem mais usada: &nbsp;
                            {repo.language}
                        </p>
                    ): null}   
                    
                    
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                        <PrimaryButton>
                            Acessar &nbsp;<Icon name="chevron right"/>
                        </PrimaryButton>
                    </a>
                </Modal>
            ) : null}
        </div>
    );
}