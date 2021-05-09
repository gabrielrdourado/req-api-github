import React, {useState, useEffect} from 'react';
import { api } from '../services/api';

export default function Repos(props) {
    const [userRepos, setUserRepos] = useState('');
    const [error, setError] = useState('');
    const currentUser =`${props.match.params.handle}`;
    
    useEffect( ()  => {
        async function Fetch(){
            try {          
                const result = await api.get(`${currentUser}/repos`);

                setUserRepos(result.data);
                
                if (result.data.length === 0) {
                  setError('Não foi possível encontrar repositórios para este usuário');
                }
            } catch (exception) {
                setUserRepos('');
                setError('Ouve um erro na requisição dos repositórios');
            }
        }
        Fetch();
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div>Repositórios</div>
            <ul>
                {
                    (userRepos.length > 0 ? (userRepos.map((repo)=>{
                        return(
                            <li key={repo.id}>
                                <p>{repo.name}</p>
                            </li>
                        );
                    })) : (<span>{error}</span>))
                }      
            </ul> 
        </div>
    );
}