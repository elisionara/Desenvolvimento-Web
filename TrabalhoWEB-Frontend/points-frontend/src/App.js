import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import FindPoints from './pages/FindPoints';
import CreatePoint from './pages/CreatePoint';
import UpdatePoint from './pages/UpdatePoint';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element = { <Home/> }  path="/" />
        <Route element = { <LandingPage/> }  path="/landingpage" />
        <Route element = { <FindPoints/> }  path="/ondedescartar" />
        <Route element = { <CreatePoint/> }  path="/cadastro" />
        <Route element = { <UpdatePoint/> }  path="/editar/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
