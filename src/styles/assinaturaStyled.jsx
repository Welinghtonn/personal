import styled from "styled-components";

export const Container = styled.div`
    display: flex;
  
    justify-content: center;
    margin-top: 20px;
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


export const Card = styled.div`
    width: 200px;
    height: 300px;
    color: #fff;
    background-color: #180e2e;
    padding: 10px;

    cursor: pointer;

    p{
        font-size: 22px;
    }

    .preco{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80%;
    }
    
    .buttonAssinar{
        display: flex;
        justify-content: end;
        width: 100%;
    }

    &&:hover{
        background-color: rgba(24, 14, 46, 0.9);
    }
`