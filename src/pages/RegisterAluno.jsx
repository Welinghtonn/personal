import React, { useState } from 'react';
import TextInicial from '../components/TextInicial';
import { RegisterStyled } from '../styles/registerStyled';
import Return from '../components/Return';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const RegisterAluno = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <RegisterStyled>
            <div className='Register'>
                <div className="container_hello">
                    <div className="text_register">
                        <h1>Bem vindo</h1>
                        <p>Insira seus dados pessoais</p>
                        <p>e comece sua jornada conosco</p>
                    </div>
                    <button className='login'>Entrar</button>
                </div>
                <div className="container">
                    <Return />
                    <TextInicial />
                    <h2>Aluno</h2>
                    <form action="">
                        <input className='inputs' type="text" required
                            autocomplete="off"
                            placeholder="Nome completo"
                        />
                        <input className='inputs' type="text" required
                            autocomplete="off"
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
                        <input className='inputs' type="text" required
                            autocomplete="off"
                            placeholder="Numero telefone"
                        />
                        <input className='inputs' type="text" placeholder='Género' required />
                    </form>
                    <div className="conatiner_button">
                        <button className='entrar'>Inscreva-se</button>
                    </div>
                </div>
            </div>
        </RegisterStyled>
    );
}

