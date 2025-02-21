import styled from "styled-components";

export const MainScreenStyled = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    .user{
        width: 380px;
    }


    .cardAlunos{
        display: flex;
        flex-direction: column;
        width: 380px;
        height: 300px;
        padding: 10px;
        gap: 14px;
        border-radius: 8px;

        background-color: #ffffff;
        box-shadow: 0 0 10px rgba(134, 134, 134, 0.2);
    }

    .TextAlunos{
        padding: 8px 0;
    }

    .containerInfosAlunos{
        display: flex;
        justify-content: space-between;
        
    }

    p{
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .icon{
        font-size: 24px;
    }

    .iconUser{
        font-size: 30px;
    }

    .cardInfosAlunos{
        display: flex;
        align-items: center;
        padding: 8px;
        height: 90px;
        width: 48%;
        border-radius: 10px;

        color: #ffffff;
        background-color: #2a1347;

        cursor: pointer;
    }

    .containerAlunos{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 74px;
        padding: 8px;
        border-radius: 10px;

        color: #fff;
        background-color: #2a1347;

        cursor: pointer;
    }

    .textAlunoRow{
        display: flex;
        align-items: end;
        flex-direction: row;
    }
`

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 110px;
    padding: 0 40px;

    color: #fff;
    background-color: #180e2e;

;

    .user{
        display: flex;
        gap: 10px;
    }

    p{
        display: flex;
        align-items: center;
        flex-direction: column;
        cursor: pointer;
    }
    
    .iconUser{
        font-size: 25px;
    }

`