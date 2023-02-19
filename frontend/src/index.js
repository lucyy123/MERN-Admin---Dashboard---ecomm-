import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import globalReducer from "./states/index"
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {api} from "./states/api"

const store=configureStore({
  reducer:{
    global:globalReducer,
    [api.reducerPath]:api.reducer,
  },
  middleware:(getDefault)=>getDefault().concat(api.middleware)

})
setupListeners(store.dispatch)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
    <App />
    </Provider>
  
);


