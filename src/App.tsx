import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Cadastro from './pages/Cadastro';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Cadastro />
    </Provider>
  );
};

export default App;
