import styled from 'styled-components';
import { cores } from '../../styles/variables';

export const ListItem = styled.li`
  background-color: white;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Nome = styled.h2`
  color: ${cores.primaria};
  margin: 0;
  margin-bottom: 5px;
  font-size: 1.2rem;
`;

export const Email = styled.p`
  color: ${cores.texto};
  margin: 0;
  margin-bottom: 5px;
`;

export const Telefone = styled.p`
  color: ${cores.texto};
  margin: 0;
`;

export const BotoesContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Botao = styled.button`
  background-color: ${cores.primaria};
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: ${cores.secundaria};
  }
`;

export const BotaoRemover = styled(Botao)`
  background-color: red;
  &:hover {
    background-color: darkred;
  }
`;




