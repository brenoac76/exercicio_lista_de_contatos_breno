import React from 'react';
import ContatoForm from '../components/ContatoForm';
import ContatoItem from '../components/ContatoItem';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import GlobalStyle from '../styles/globalStyles';
import { PageContainer, Titulo, FormContainer, ListaContatos } from './styles';

const Cadastro: React.FC = () => {
  const contatos = useSelector((state: RootState) => state.contatos);

  // Ordena os contatos pelo nome em ordem alfabética
  const contatosOrdenados = [...contatos].sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <PageContainer>
      <GlobalStyle />
      <FormContainer>
        <Titulo>LISTA DE CONTATOS</Titulo>
        <ContatoForm />
      </FormContainer>
      <ListaContatos>
        {contatosOrdenados.map(contato => (
          <ContatoItem key={contato.id} contato={contato} />
        ))}
      </ListaContatos>
    </PageContainer>
  );
};

export default Cadastro;























