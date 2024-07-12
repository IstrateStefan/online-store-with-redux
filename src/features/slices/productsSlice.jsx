import { createSlice } from '@reduxjs/toolkit';
import { storeData } from '../../assets/data/dummyData';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    filteredProducts: storeData,
    singleProduct: '',
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );

        state.filteredProducts = filter;
      } catch (err) {
        return err;
      }
    },
    singleProduct(state, action) {
      try {
        const product = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = product;
      } catch (err) {
        return err;
      }
    },
  },
});

export const { filterProducts, singleProduct } = productsSlice.actions;
export default productsSlice.reducer;
