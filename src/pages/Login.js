import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { login, logout } from '../features/userSlice';
import { LoginStyle, PrimaryButton } from '../styles';

export default function Login(){
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name === "admin" && password === "password"){
            try{
                dispatch(login({
                    name: name,
                    password: password,
                    loggedIn: true,
                }));
            } catch(exception){
                dispatch(logout());
                setErrorMsg('Ocorreu um erro durante o login');
            }
        }
        else {
            setErrorMsg('Usuário ou senha incorreto');
        }        
    };

    return(
        <div>
            <main style={{height: "100vh"}}>
                <LoginStyle onSubmit={(e) => handleSubmit(e)}>
                    <h2>Login</h2>
                    <hr />
                    <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {errorMsg != null ? (<span>{errorMsg}</span>): null}
                    <PrimaryButton type="submit">Logar &nbsp;<Icon name="sign-in"/></PrimaryButton>
                </LoginStyle>
            </main>
        </div>
    );
}