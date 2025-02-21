import styled from "styled-components";

export const RegisterStyled = styled.div`
.Register{
    display: flex;
    width: 100vw;
}

.login{
    cursor: pointer;
    background: transparent;
    color: #fff;
    border: 2px #ffffff solid;
}

.container_hello{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40vw;
    gap: 20px;

    color: #fff;
    background-color: #2a1347;
}

.text_register{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 60vw;
    gap: 20px;
}

form{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 350px;
}

.inputs{
    display: flex;
    align-items: center;
    justify-content: center;
    border: gray 2px solid;
    outline-color: #000000;
    border-radius: 5px;
    padding: 4px 12px;

    span{
        cursor: pointer;
    }
}

input{
    width: 100%;
    border: none;
    outline: none;
}

.eye-icon{
    height: 20px;
}

.conatiner_button{
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 350px;
}

button{
    padding: 6px 19px;
    border: none;
    border-radius: 5px;
}

.entrar{
    width: 100%;

    color: #fff;
    background-color: #2a1347;
    cursor: pointer;
}
`

