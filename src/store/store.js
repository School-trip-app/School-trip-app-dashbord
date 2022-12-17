import { configureStore } from '@reduxjs/toolkit';
import product from './products-re';
import photographer from './Photographers-re'


export default  configureStore({
    reducer: {
      product:product,
      photographer:photographer,
      
    }
});

