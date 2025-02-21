/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { LoginProfessorStyled } from "../styles/loginProfessorStyled"
import TextInicial from '../components/TextInicial';
import { useNavigate } from 'react-router-dom';
import Return from '../components/Return';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const LoginProfessor = () => {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
    
        const togglePasswordVisibility = () => {
            setShowPassword(prevState => !prevState);
        };

    return (
        <LoginProfessorStyled>
            <div className='LoginProfessor'>
                <div className="container_hello">
                    <div className="text_login">
                        <h1>Bem vindo</h1>
                        <p>Insira seus dados pessoais</p>
                        <p>e comece sua jornada conosco</p>
                    </div>
                    <button className='login'>Entrar</button>
                </div>
                <div className="container">
                    <Return />
                    <TextInicial />
                    <h2>Professor</h2>
                    <form action="">
                        <input className='inputs' type="text" required
                            autoComplete="off"
                            placeholder="E-mail"
                        />
                        <div className="inputs">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                autoComplete="off"
                                placeholder="Senha"
                            /><span onClick={togglePasswordVisibility} className="eye-icon">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </form>
                    <p>Esqueceu-se da senha? <a href="">Clique aqui</a></p>
                    <div className="conatiner_buttons">
                        <button  onClick={() => navigate("/mainScreen")} className='entrar'>Entrar</button>
                        <button onClick={() => navigate("/registerProfessor")} className='login login_create'>Não tenho uma conta</button>
                    </div>
                </div>
            </div>
        </LoginProfessorStyled>
    );
}

