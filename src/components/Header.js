import iconeImg from '../assets/images/icone.png';
import {Icon} from 'semantic-ui-react';
import { HeaderStyle } from '../styles';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <HeaderStyle>
            <Link to="/">
                <div>
                    <img src={iconeImg} alt="" />
                </div>
            </Link>
            <div>
                <p>Usuário</p>
                <span>Logout <Icon name="log out"/></span>
            </div>
        </HeaderStyle>
    );
}