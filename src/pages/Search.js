import React, {useState} from 'react';
import CardUser from '../components/CardUser';

import { api } from '../services/api';

export default function Search() {
    const [searchInput, setSearchInput] = useState({user:''});
    const [userFind, setUserFind] = useState([]);

    const userSearch = async (e) =>{
        e.preventDefault();

        const result = await api.get(`${searchInput.user}`);

        setUserFind(result.data);

        return;
    }

    return (
        <div>
            <div>
                <form onSubmit={(e) => userSearch(e)}>
                    <span>
                        <input type="text" placeholder="Pesquise aqui..." onChange={(e) => setSearchInput({...searchInput, user: e.target.value})}/>
                        <button type="submit">Pesquisar</button>                                       
                    </span>
                </form>
            </div>           
            {!Array.isArray(userFind)?<CardUser user={userFind}/>: ''}
        </div>
    )
}