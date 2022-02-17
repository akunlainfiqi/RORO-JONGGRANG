import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Berita from './routes/Berita';
import About from './routes/About';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

const contentBakar = {
  mainText : "Pembabatan Hutan",
  secondText : "HUTAN KITA UNTUK MASA DEPAN CUCU",
  imageUrl : "https://images.unsplash.com/photo-1548259687-2bf0e163a13e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100"
}
const contentFossil = {
  mainText : "Penggunaan Bahan Bakar Fossil",
  secondText : "PENGGUNAAN ENERGI MINYAK DAN FOSSIL",
  imageUrl : "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=100"
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Pembakaran" element={<Berita imageUrl={ contentBakar.imageUrl} mainText={ contentBakar.mainText } secondText={ contentBakar.secondText } />}/>
        <Route path="/Fossil" element={<Berita imageUrl={ contentFossil.imageUrl } mainText={ contentFossil.mainText } secondText={ contentFossil.secondText } />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
