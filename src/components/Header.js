import iconeImg from '../assets/images/icone.png';
import {Icon} from 'semantic-ui-react';
import { HeaderStyle } from '../styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

export default function Header(){
    const userLoggedIn = useSelector(selectUser)
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    }

    return(
        <HeaderStyle>
            <Link to="/">
                <div>
                    <img src={iconeImg} alt="" />
                </div>
            </Link>
            <div>
                <p>{userLoggedIn.name}</p>
                <span>
                    <button onClick={(e)=> handleLogout(e)}>
                        Logout <Icon name="log out"/>
                    </button>
                </span>
            </div>
        </HeaderStyle>
    );
}