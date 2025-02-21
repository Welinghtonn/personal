import React, { useEffect, useState } from 'react';
import { FaChartLine, FaClipboardList, FaDollarSign, FaDumbbell, FaEdit, FaExclamation, FaFolder, FaPlus, FaWhatsapp } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { API_BASE_ADM } from '../config';
import '../styles/DetalhesAluno.css';
import { Header } from './../components/Header';

export const DetalhesAluno = () => {
    const { id } = useParams();
    const [aluno, setAluno] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('inicio');

    useEffect(() => {
        const fetchAluno = async () => {
            try {
                const response = await fetch(`${API_BASE_ADM}admin/users/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MzkyNzc2NjIsImV4cCI6MTc3MDgxMzY2MiwibmJmIjoxNzM5Mjc3NjYyLCJqdGkiOiJGc290bGI2UjQ1WlpIUVBJIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.5tlmbOBCBRBFBwHspV_gxN3IiEWUc9evH4gb6Zrgd30'
                    }
                });

                if (!response.ok) {
                    throw new Error('Erro ao buscar detalhes do aluno');
                }

                const data = await response.json();
                setAluno(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAluno();
    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;
    if (!aluno) return <p>Aluno não encontrado.</p>;

    return (
        <>
            <Header />
            <div className="top-header">
                <button className="voltar">&lt; Voltar</button>
            </div>
    
            <div className="detalhes-aluno">
                <div className="perfil">
                    <img src={ 'https://sistemapcb.com.br/uploads/avatars/user-261815.jpg'} alt={aluno.name} className="avatar" />
                    <h2>{aluno.name}</h2>
                    <span className="status">Online</span>
                </div>
    
                <div className="tabs">
                    <button onClick={() => setActiveTab('inicio')} className={activeTab === 'inicio' ? 'active' : ''}>Início</button>
                    <button onClick={() => setActiveTab('opcoes')} className={activeTab === 'opcoes' ? 'active' : ''}>Opções</button>
                </div>
    
                {activeTab === 'inicio' && (
                    <div className="frequencia-treino">
                        <h3>Frequência de Treinos</h3>
                        <div className="dias">
                            {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((dia, index) => (
                                <button key={index} className="dia">{dia}</button>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === 'inicio' && (
                    <div className="inicio-lista">
                        <div className="opcao"><FaDumbbell /> Treinos</div>
                        <div className="opcao"><FaClipboardList /> Avaliações</div>
                        <div className="opcao"><FaDollarSign /> Posição financeira</div>
                        <div className="opcao"><FaChartLine /> Progresso do aluno</div>
                        <div className="opcao"><FaPlus /> Treinos extras</div>
                        <div className="opcao"><FaFolder /> Arquivos</div>
                    </div>
                )}                
                {activeTab === 'opcoes' && (
                    <div className="opcoes-lista">
                        <div className="opcao"><FaWhatsapp /> Conversar</div>
                        <div className="opcao"><FaExclamation /> Informações de login</div>
                        <div className="opcao"><FaDollarSign /> Preferências de notificação</div>
                        <div className="opcao"><FaEdit /> Editar informações do aluno</div>

                    </div>  
               
                )}           
                {activeTab === 'opcoes' && (   
                    <div className="botoes-container">
                        <button className="botao inativar">Inativar aluno</button>
                        <button className="botao excluir">Excluir aluno</button>
                    </div>    
                )}                                          
            </div>
            
        </>
    );
    
};
