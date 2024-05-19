import styled from 'styled-components';
import { cores } from '../../styles/variables';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${cores.fundo};
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${cores.primaria};
  border-radius: 5px;
`;

export const BotaoAdicionar = styled.button`
  width: 322px;
  background-color: ${cores.primaria};
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: ${cores.secundaria};
  }
`;






