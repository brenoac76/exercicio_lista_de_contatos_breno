import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContato } from '../../store/reducers/contatosSlice';
import { Contato } from '../../models/Contato';
import { FormContainer, Input, BotaoAdicionar } from './styles';
import InputMask from 'react-input-mask';

const ContatoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [emailError, setEmailError] = useState(false);

  const formatarTelefone = (value: string) => {
    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 2) {
      return `(${onlyNums}`;
    }
    if (onlyNums.length <= 6) {
      return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2)}`;
    }
    if (onlyNums.length <= 10) {
      return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 7)}-${onlyNums.slice(7)}`;
    }
    return `(${onlyNums.slice(0, 2)}) ${onlyNums.slice(2, 7)}-${onlyNums.slice(7, 11)}`;
  };

  const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(formatarTelefone(event.target.value));
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    setEmailError(!validateEmail(value));
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleAdicionarContato = () => {
    if (!nome || !email || !telefone) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      alert('Por favor, informe um e-mail válido.');
      return;
    }

    const novoContato: Contato = {
      id: new Date().getTime().toString(),
      nome,
      email,
      telefone,
    };
    dispatch(addContato(novoContato));
    setNome('');
    setEmail('');
    setTelefone('');
    setEmailError(false);
  };

  return (
    <FormContainer>
      <Input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: emailError ? 'red' : undefined }}
      />
      <Input
        as={InputMask}
        mask="(99) 99999-9999"
        placeholder="Telefone"
        value={telefone}
        onChange={handleTelefoneChange}
      />
      <BotaoAdicionar onClick={handleAdicionarContato}>Adicionar Contato</BotaoAdicionar>
    </FormContainer>
  );
};

export default ContatoForm;










