import { Box, CircularProgress } from '@mui/material'; // Importando o CircularProgress do MUI
import React, { useState } from 'react';
import CustomSnackbar from '../components/CustomSnackbar'; // Importando o CustomSnackbar
import { Header } from '../components/Header';
import { API_BASE_URL } from '../config';
import { Card } from '../styles/formAlunosStyled';

export const FormAlunos = () => {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        password: '',
    });

    // Estados do Snackbar
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    // Estado do Loader (carregando ou não)
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            name: formData.nome,
            phone: formData.telefone,
            email: formData.email,
            password: formData.password,
            roles: [2],
        };

        setLoading(true); // Ativando o loader

        try {
            const response = await fetch(`${API_BASE_URL}auth/register-account`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Resposta do servidor:', data);
                setFormData({ nome: '', telefone: '', email: '', password: '' });

                // Exibe o snackbar com mensagem de sucesso
                setSnackbarMessage('Cadastro realizado com sucesso!');
                setSnackbarSeverity('success');
                setOpenSnackbar(true);

            } else {
                console.error('Erro no envio:', response.statusText);
                setSnackbarMessage('Erro ao enviar os dados. Verifique os campos e tente novamente.');
                setSnackbarSeverity('error');
                setOpenSnackbar(true);
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
            setSnackbarMessage('Não foi possível conectar ao servidor.' + error);
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        } finally {
            setLoading(false); // Desativando o loader
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div>
            <Header />
            <p>Cadastrar Aluno</p>
            <Card>
                <form onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            placeholder="Digite o nome do aluno"
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="telefone">Telefone:</label>
                        <input
                            type="text"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            placeholder="Digite o telefone do aluno"
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Digite o e-mail do aluno"
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Digite a senha do aluno"
                            required
                        />
                    </div>
                    <button type="submit" className="btnSubmit" disabled={loading}>
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                </form>
            </Card>

            {/* Exibindo o loader centralizado */}
            {loading && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                        zIndex: 9999, 
                    }}
                >
                    <CircularProgress sx={{ color: 'white' }} />
                </Box>
            )}

            {/* Usando o CustomSnackbar */}
            <CustomSnackbar
                open={openSnackbar}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
                severity={snackbarSeverity}
            />
        </div>
    );
};
