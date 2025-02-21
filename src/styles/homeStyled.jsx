import styled from 'styled-components';

// Estilos com styled-components
export const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 430px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ButtonsSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Botao = styled.button`
  width: 250px;
  padding: 7px;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: opacity 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const BotaoAluno = styled(Botao)`
  color: #fff;
  background-color: #2a1347;
`;

export const BotaoPersonalTrainer = styled(Botao)`
  color: #fff;
  background-color: #2a1347;
`;

export const ImagemContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ImagemAcademia = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  width: 100%;
  height: 100vh;
`;
