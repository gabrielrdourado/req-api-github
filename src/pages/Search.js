import React, {useState} from 'react';
import { api } from '../services/api';

import Header from '../components/Header';
import CardUser from '../components/CardUser';

import { SearchStyle } from '../styles';

export default function Search() {
    const [searchInput, setSearchInput] = useState({user:''});
    const [userFind, setUserFind] = useState([]);    
    const [errorMsg, setErrorMsg] = useState('');

    const userSearch = async (e) =>{
        e.preventDefault();       

        try {          
            const result = await api.get(`${searchInput.user}`);

            setUserFind(result.data);  
        } catch (exception) {
            setUserFind([]);
            if (exception.response.status === 404){
                setErrorMsg('Usuário não encontrado');
            } else {
                setErrorMsg('Erro na requisição de usuário');
            }
        }
        return;
    }

    return (
        <div>
            <Header/>
            <main>
                <SearchStyle>
                    <h2>Procure por usuários do GitHub</h2>
                    <form onSubmit={(e) => userSearch(e)}>
                        <div className="inputGroup">
                            <input name="nome" type="text" placeholder="Pesquise aqui..." onChange={(e) => setSearchInput({...searchInput, user: e.target.value})}/>
                            <span>
                                <button type="submit">Pesquisar</button>
                            </span>                            
                        </div>
                    </form>
                </SearchStyle>           
                {!Array.isArray(userFind)?<CardUser user={userFind}/>: (<h4>{errorMsg}</h4>)}
            </main>
        </div>
    )
}