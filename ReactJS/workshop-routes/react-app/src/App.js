import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { onStartInitalData } from './initialData';
import * as gameService from './services/gameService';


function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [isStarted, setIsStarted] = useState(false);

  onStartInitalData(isStarted, setIsStarted);
  console.log(isStarted);

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        setGames(result);
      })
  }, [])

  function onGameCreateHandler(data) {
    gameService.create(data)
      .then(res => {
        setGames(state => ([...state, res]))
        navigate('/catalog')
      })
  }

  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog games={games} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create-game' element={<Create onGameCreateHandler={onGameCreateHandler} />} />
          <Route path='/games/:gameId' element={<Details />} />
          <Route path='/games/:gameId/edit' element={<Edit />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
