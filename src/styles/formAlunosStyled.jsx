import styled from 'styled-components';

export const Card = styled.div`
    margin: 20px auto; /* Centraliza horizontalmente */
    padding: 20px;
    width: 50%; /* Ocupa metade da largura da tela */
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column; /* Organiza o conteúdo verticalmente */
    align-items: center; /* Centraliza o conteúdo horizontalmente */
    justify-content: center; /* Centraliza o conteúdo verticalmente */
    background-color: #fff;

    .formGroup {
        margin-bottom: 20px;
        width: 100%; /* Faz com que o input ocupe toda a largura do Card */

        input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }
    }

    .btnSubmit {
        background-color: #28a745; /* Cor verde */
        color: white; /* Texto branco */
        border: none; /* Remove a borda padrão */
        padding: 10px 20px; /* Espaçamento interno */
        font-size: 16px; /* Tamanho da fonte */
        font-weight: bold; /* Texto em negrito */
        border-radius: 5px; /* Bordas arredondadas */
        cursor: pointer; /* Aponta a seta para o cursor */
        transition: background-color 0.3s ease, transform 0.2s ease; /* Transições suaves */

        &:hover {
            background-color: #218838; /* Tom de verde mais escuro no hover */
            transform: scale(1.05); /* Aumenta ligeiramente o tamanho no hover */
        }

        &:active {
            background-color: #1e7e34; /* Cor ainda mais escura ao clicar */
            transform: scale(1); /* Retorna ao tamanho normal ao clicar */
        }

        &:disabled {
            background-color: #6c757d; /* Cinza para estado desativado */
            cursor: not-allowed; /* Mostra que o botão está desativado */
            opacity: 0.65; /* Deixa o botão parcialmente transparente */
        }
    }
`;
