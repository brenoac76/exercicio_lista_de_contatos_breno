import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Contato } from '../../models/Contato';
import { removeContato, editContato, addContato } from '../../store/reducers/contatosSlice';
import { ListItem, Nome, Email, Telefone, BotoesContainer, Botao, BotaoRemover } from './styles';

interface Props {
  contato: Contato;
}

const ContatoItem: React.FC<Props> = ({ contato }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContato, setEditedContato] = useState<Contato>({ id: '', nome: '', email: '', telefone: '' });
  const [emailError, setEmailError] = useState(false);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContato(contato.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      if (validateEmail(editedContato.email)) {
        dispatch(editContato(editedContato));
        setIsEditing(false);
      } else {
        setEmailError(true);
        alert('Por favor, informe um e-mail válido.');
      }
    } else {
      setIsEditing(true);
      setEditedContato(contato); // Define o contato atual para edição
    }
  };

  const handleAdd = () => {
    if (validateEmail(editedContato.email)) {
      dispatch(addContato(editedContato));
      setEditedContato({ id: '', nome: '', email: '', telefone: '' }); // Limpa o estado para adicionar novo contato
      setIsEditing(false);
    } else {
      setEmailError(true);
      alert('Por favor, informe um e-mail válido.');
    }
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 11) {
      const formattedValue = onlyNums.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      setEditedContato({ ...editedContato, telefone: formattedValue });
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditedContato({ ...editedContato, email: value });
    setEmailError(false); // Reset email error state
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleBlurEmail = () => {
    if (!validateEmail(editedContato.email)) {
      setEmailError(true);
      alert('Por favor, informe um e-mail válido.');
    }
  };

  return (
    <ListItem>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedContato.nome}
            onChange={(e) => setEditedContato({ ...editedContato, nome: e.target.value })}
          />
          <input
            type="email"
            value={editedContato.email}
            onChange={handleEmailChange}
            onBlur={handleBlurEmail}
            style={{ borderColor: emailError ? 'red' : undefined }}
          />
          <input
            type="text"
            value={editedContato.telefone}
            onChange={handleTelefoneChange}
          />
          <Botao onClick={handleEdit}>Salvar</Botao>
        </>
      ) : (
        <>
          <Nome>{contato.nome}</Nome>
          <Email>{contato.email}</Email>
          <Telefone>{contato.telefone}</Telefone>
          <BotoesContainer>
            <Botao onClick={handleEdit}>Editar</Botao>
            <BotaoRemover onClick={handleRemove}>Remover</BotaoRemover>
          </BotoesContainer>
        </>
      )}
    </ListItem>
  );
};

export default ContatoItem;

























