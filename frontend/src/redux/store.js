import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import toastReducer from './slices/ToastSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    toast: toastReducer,   // ← new
  },
});

export default store;