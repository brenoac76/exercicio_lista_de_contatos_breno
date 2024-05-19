import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
  overflow-x: hidden; /* Esconde o scroll horizontal */
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const Titulo = styled.h1`
  // font-size: 2rem;
  // color: #333;
  // margin-bottom: 20px;
  // text-align: center;
  font-family: "Audiowide", sans-serif;
  // font-family: 'Montserrat', sans-serif;
  font-size: 2em;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

export const ListaContatos = styled.div`
  max-height: calc(100vh - 180px); /* Altura máxima da lista de contatos */
  overflow-y: auto; /* Adiciona scroll vertical quando necessário */
  width: 100%;
  max-width: 600px; /* Aumenta a largura da lista de tarefas */
  border-radius: 10px; /* Arredonda todos os cantos da lista de tarefas */
  padding-bottom: 60px; /* Espaço extra para garantir que os botões do último contato sejam totalmente visíveis */
`;





