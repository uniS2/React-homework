import React from 'react';
import Button from './components/Button';
import ReactDOM from 'react-dom/client';
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Button episode="first" border="none">첫화보기</Button>
    <Button episode="continue" border="light">이어보기</Button>
    <Button episode="next" border="heavy">다음화보기</Button>
  </React.StrictMode>
);