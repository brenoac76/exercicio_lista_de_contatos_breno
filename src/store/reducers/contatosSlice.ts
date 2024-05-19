import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contato } from '../../models/Contato';

const initialState: Contato[] = [];

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    addContato(state, action: PayloadAction<Contato>) {
      state.push(action.payload);
    },
    removeContato(state, action: PayloadAction<string>) {
      return state.filter(contato => contato.id !== action.payload);
    },
    editContato(state, action: PayloadAction<Contato>) {
      const index = state.findIndex(contato => contato.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addContato, removeContato, editContato } = contatosSlice.actions;
export default contatosSlice.reducer;



