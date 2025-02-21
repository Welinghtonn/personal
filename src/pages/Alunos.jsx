import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import { Card } from '../styles/cardAlunosStyled';
import { Header } from './../components/Header';

export const Alunos = () => {
    const [alunos, setAlunos] = useState([]); 
    const [search, setSearch] = useState('');
    const navigate = useNavigate(); 

    const fetchAlunos = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}list/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3Mzg5NTI1MjYsImV4cCI6MTc3MDQ4ODUyNiwibmJmIjoxNzM4OTUyNTI2LCJqdGkiOiJzZFZ2YUtOOVVpRFN2dENuIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.mtFEPIvUCpuyjXTQeAWoH1Z_kAevU07kumg47xah7mw`
                }
            });

            const data = await response.json();
            
            setAlunos(data);
        } catch (error) {
            console.error("Erro ao buscar alunos:", error);
        }
    };

    useEffect(() => {
        fetchAlunos();
    }, []);

    const filteredAlunos = alunos.filter((aluno) =>
        aluno.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleAlunoClick = (id) => {
        navigate(`/alunos/${id}`);
    };

    return (
        <div>
            <Header />
            <p>Alunos</p>
            <Card>
                <div className="containerInput">
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="containerAlunosRegisters">
                    {filteredAlunos.map((aluno) => (
                        <div key={aluno.ID} className="alunoItem">
                            <p onClick={() => handleAlunoClick(aluno.id)} style={{ cursor: 'pointer' }}>
                                <img
                                    src={'https://sistemapcb.com.br/uploads/avatars/user-261815.jpg'}
                                    alt={aluno.name}
                                    className="avatar"
                                    onClick={() => handleAlunoClick(aluno.id)}
                                    style={{ cursor: 'pointer' }}
                                />
                                {aluno.name}
                            </p>
                            <a href={`https://wa.me/${aluno.phone}`} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp style={{ color: 'green' }} />
                            </a>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};
