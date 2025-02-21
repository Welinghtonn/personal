import React from 'react';
import { useNavigate } from "react-router-dom";

import {
    HomeWrapper,
    Container,
    ButtonsSelect,
    BotaoAluno,
    BotaoPersonalTrainer,
    ImagemContainer,
    ImagemAcademia,
} from '../styles/homeStyled';

import Imagem from "../assets/academia.jpg";
import TextInicial from '../components/TextInicial';

export const Home = () => {
    const navigate = useNavigate();

    return (
        <HomeWrapper>
            <Container>
                <TextInicial />
                <ButtonsSelect>
                    <BotaoAluno onClick={() => navigate('loginAluno')}>Entrar como aluno</BotaoAluno>
                    <BotaoPersonalTrainer onClick={() => navigate('loginProfessor')}>Entrar como personal trainer</BotaoPersonalTrainer>
                </ButtonsSelect>
            </Container>
            <ImagemContainer>
                <ImagemAcademia src={Imagem} alt="Imagem de academia" />
            </ImagemContainer>
        </HomeWrapper>
    );
}

