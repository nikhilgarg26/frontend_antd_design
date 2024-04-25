import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider theme={{
    token: {
      // Seed Token
      colorPrimary: '#F87060',
      borderRadius: 10,
      fontFamily: 'sans-serif',
      colorBgLayout: '#FFFDFD',
      colorTextPlaceholder:'#f28c80',

      // Alias Token
      colorBgContainer: '#ffffff',
    },
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ConfigProvider>
);

