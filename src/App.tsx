import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CadastroCategoria from "./components/categoria/cadastroCategoria/CadastroCategoria";
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria";
import ListaCategoria from "./components/categoria/listaCategoria/ListaCategoria";
import Footer from "./components/estaticos/footer/Footer";
import Navbar from "./components/estaticos/navbar/Navbar";
import CadastroProdutos from "./components/produtos/cadastroProdutos/CadastroProdutos";
import DeletarProdutos from "./components/produtos/deletarProdutos/DeletarProdutos";
import ListaProdutos from "./components/produtos/listaProdutos/ListaProdutos";
import CadastroUsuario from "./paginas/cadastro/CadastroUsuario";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import SobreNos from "./paginas/sobrenos/SobreNos";
import store from "./store/store";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar setInputText={setInputText} />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategoria />} />
          <Route path="/produtos" element={<ListaProdutos />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/formularioCategoria" element={<CadastroCategoria />} />
          <Route
            path="/formularioCategoria/:id"
            element={<CadastroCategoria />}
          />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          <Route path="/deletarProduto/:id" element={<DeletarProdutos />} />
          <Route path="/formularioProduto" element={<CadastroProdutos />} />
          <Route path="/formularioProduto/:id" element={<CadastroProdutos />} />
          <Route path="/sobreNos/" element={<SobreNos />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
