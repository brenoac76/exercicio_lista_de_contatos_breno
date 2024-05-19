import { combineReducers } from '@reduxjs/toolkit';
import contatosReducer from './contatosSlice';

const rootReducer = combineReducers({
  contatos: contatosReducer,
});

export default rootReducer;
