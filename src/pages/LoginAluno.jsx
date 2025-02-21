/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Return from '../components/Return';
import TextInicial from '../components/TextInicial';
import { API_BASE_URL } from '../config';
import { LoginAlunoStyled } from "../styles/loginAlunoStyled";

export const LoginAluno = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post(`${API_BASE_URL}auth/login`, {
                email,
                password
            });


            if (response.status === 200) {
                sessionStorage.setItem('userLogged', JSON.stringify(response));
               
                navigate("/mainScreen");
            }
        } catch (error) {
            setError("Credenciais inválidas. Tente novamente.");
        }
    };

    return (
        <LoginAlunoStyled>
            <div className='LoginAluno'>
                <div className="container_hello">
                    <div className="text_login">
                        <h1>Bem vindo</h1>
                        <p>Insira seus dados pessoais</p>
                        <p>e comece sua jornada conosco</p>
                    </div>
                </div>
                <div className="container">
                    <Return />
                    <TextInicial />
                    <h2>Aluno</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            className='inputs'
                            type="text"
                            required
                            autoComplete="off"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="inputs">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                autoComplete="off"
                                placeholder="Senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span onClick={togglePasswordVisibility} className="eye-icon">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className='entrar'>Entrar</button>
                    </form>
                    <p>Esqueceu-se da senha? <a href="">Clique aqui</a></p>
                    <div className="conatiner_buttons">
                        <button onClick={() => navigate("/mainScreen")} className='entrar'>Entrar</button>
                        <button onClick={() => navigate("/registerAluno")} className='login login_create'>Não tenho uma conta</button>
                    </div>
                </div>
            </div>
        </LoginAlunoStyled>
    );
};
