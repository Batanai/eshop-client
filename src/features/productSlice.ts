import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {IProduct} from '../../types/GlobalTypes';
import {RootState} from '../app/store';

interface ProductState {
  value: IProduct[];
}

const initialSate: ProductState = {
  value: [],
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {},
);

export const productSlice = createSlice({
  name: 'products',
  initialSate,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.value.push(action.payload);
    },

    deleteProduct: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const {addProduct} = productSlice.actions;

//selectors
export const selectProducts = (state: RootState) => state.products.value;

export default productSlice.reducer;
