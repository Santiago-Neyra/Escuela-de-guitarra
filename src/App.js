import logo from './logo.svg';
import './App.css';
import {Inicio} from "../src/componentes/inicio/inicio.js"
import { ComoFunciona } from './componentes/funciona/comoFunciona';
import { Planes } from './componentes/planes/planes';
import { Testimonios } from './componentes/testimonios/testimonios';
import { Footer } from './componentes/footer/footer';

function App() {
  return (
    <div className="App">
      
      <Inicio></Inicio>
      <ComoFunciona></ComoFunciona>
      <Planes></Planes>
      <Testimonios></Testimonios>
      <Footer></Footer>
    </div>
  );
}

export default App;
