import React from 'react';
import { HeaderStyled } from '../styles/mainScreenStyled';
import TextInicial from './TextInicial';
import { BsCoin } from "react-icons/bs";
import { LuCircleUserRound } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const Navigate = useNavigate()

    return (
        <div>
            <HeaderStyled>
                <TextInicial />
                <div className="user">
                    <p onClick={() => {Navigate("/assinatura")}}><BsCoin className='iconUser'/> Assinatura </p>
                    <p><LuCircleUserRound className='iconUser'/> Perfil</p>
                </div>
            </HeaderStyled>
        </div>
    );
}