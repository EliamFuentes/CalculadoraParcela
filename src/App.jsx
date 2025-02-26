import Formulario from "./components/Formulario";
import CalculadoraParcelas from "./components/CalculadoraParcelas";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/calculadora" element={<CalculadoraParcelas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
