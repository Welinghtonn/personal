
import styled from 'styled-components';

export const Card = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);


body {
    font-family: Arial, sans-serif;
    background-color: #f4f7fc;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 800px;
    margin: 20px auto;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.header {
    background: #1e3a5f;
    color: white;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.header h2 {
    margin: 0;
    font-size: 18px;
}

.avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
}

.user-info {
    display: flex;
    align-items: center;
}

.status {
    color: #4caf50;
    font-size: 14px;
}

.tabs {
    display: flex;
    border-bottom: 2px solid #ddd;
    margin-top: 10px;
}

.tabs button {
    flex: 1;
    padding: 10px;
    border: none;
    background: #f4f7fc;
    cursor: pointer;
    font-size: 16px;
    transition: background 0.3s;
}

.tabs button.active {
    background: #4c90ff;
    color: white;
    font-weight: bold;
}

.card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-top: 15px;
}

.list {
    list-style: none;
    padding: 0;
}

.list li {
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    transition: background 0.3s;
}

.list li:hover {
    background: #eef2ff;
}

.list li i {
    font-size: 20px;
    color: #4c90ff;
    margin-right: 10px;
}


    .containerInput {
        margin-bottom: 20px;

        input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }
    }
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
    }   
    .containerAlunosRegisters {
        display: flex;
        flex-direction: column; /* Coloca os itens na vertical */
        gap: 15px; /* Espaçamento entre os itens */

        .alunoItem {
            display: flex;
            align-items: center; /* Alinha o ícone e o texto */
            justify-content: space-between; /* Espaça o ícone do texto */
            padding: 10px 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #f9f9f9;
            transition: background-color 0.3s;

            &:hover {
                background-color: #e6f7ff;
            }

            p {
                display: flex;
                align-items: center;
                font-size: 16px;
                font-weight: bold;
                margin: 0;

                svg {
                    margin-right: 10px;
                }
            }

            a {
                text-decoration: none;
                font-size: 20px;
                color: green;
            }
        }
    }
`;
