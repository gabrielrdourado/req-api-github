import React, {useState, useEffect} from 'react';
import { api } from '../services/api';

import Header from '../components/Header';
import CardRepo from '../components/CardRepo';

import { ReposList } from '../styles';

export default function Repos(props) {
    const [userRepos, setUserRepos] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const currentUser =`${props.match.params.handle}`;
    
    useEffect( ()  => {
        async function Fetch(){
            try {          
                const result = await api.get(`${currentUser}/repos`);

                setUserRepos(result.data);
                
                if (result.data.length === 0) {
                  setErrorMsg('Não foi encontrado repositórios para este usuário');
                }
            } catch (exception) {
                setUserRepos('');
                setErrorMsg('Erro na requisição dos repositórios');
            }
        }
        Fetch();
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Header/>
            <main style={{height: "auto"}}>
                <ReposList>
                    <h2>Repositórios</h2>
                    <ul>
                        {
                            (userRepos.length > 0 ? (userRepos.map((repo)=>{
                                return(
                                    <li key={repo.id}>
                                        <CardRepo Repo={repo}/>
                                    </li>
                                );
                            })) : (<span>{errorMsg}</span>))
                        }      
                    </ul> 
                </ReposList>
            </main>
        </div>
    );
}