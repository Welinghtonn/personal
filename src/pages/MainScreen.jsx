/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { BsClipboardCheck, BsLink } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoLibraryOutline } from "react-icons/io5";
import { LuBicepsFlexed, LuCircleUserRound, LuUserPlus } from "react-icons/lu";
import { PiUsersThree } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { MainScreenStyled } from '../styles/mainScreenStyled';

export const MainScreen = () => {
    const navigate = useNavigate()

    return (
        <>
            <Header />
            <MainScreenStyled>
                <div className="user">
                    <p className='textAlunoRow'><LuCircleUserRound className='icon  iconUser' /> USER</p>
                </div>
                <div className="cardAlunos">
                    <p className='TextAlunos'>Alunos</p>

                    <div onClick={() => navigate("/formAlunos")} className="containerInfosAlunos">
                        <div className="cardInfosAlunos">
                            <p><LuUserPlus className='icon' />Adicionar alunos</p>
                        </div>
                        <div className="cardInfosAlunos">
                            <p><BsLink className='icon' /> Link de cadastro</p>
                        </div>
                    </div>

                    <div onClick={() => navigate("/alunos")} className="containerAlunos">
                        <p  className='textAlunoRow'><PiUsersThree className='icon' /> Alunos</p>
                        <IoIosArrowForward />
                    </div>
                </div>

                <div className="cardAlunos">
                    <p>Treinos</p>

                    <div className="containerInfosAlunos">
                        <div className="cardInfosAlunos">
                            <p><BsClipboardCheck className='icon' />Frequência</p>
                        </div>
                        <div className="cardInfosAlunos">
                            <p><LuBicepsFlexed className='icon' />Exercícios</p>
                        </div>
                    </div>

                    <div className="containerAlunos">
                        <p className='textAlunoRow'><IoLibraryOutline className='icon' />Biblioteca</p>
                        <IoIosArrowForward />
                    </div>
                </div>
            </MainScreenStyled>
        </>
    );
}
