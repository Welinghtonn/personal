/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { ReturnComponent } from '../styles/returnStyled';
import { useNavigate } from 'react-router-dom';

const Return = () => {
    const navigate = useNavigate()

    const handleVoltar = () => {
        navigate(-1);  
    };

    return (
        <ReturnComponent>
            <button onClick={handleVoltar}>
                <IoMdArrowBack /> Voltar
            </button>
        </ReturnComponent>
    );
}

export default Return;
