import React from 'react';
import {Icon} from 'semantic-ui-react'
import {ModalStyle} from '../styles'

const Modal = ({id = 'modal', onClose = () =>{}, children}) =>{

    const handleOutsideClick = (e) => {
        if(e.target.id === id) onClose();
    };

    return(
        <ModalStyle id={id} onClick={handleOutsideClick}>
            <div className="container">
                <button className="close" onClick={onClose}><Icon name="times"/></button>
                <div className="content">
                    {children}
                </div>
            </div>
        </ModalStyle>
    )
}

export default Modal;