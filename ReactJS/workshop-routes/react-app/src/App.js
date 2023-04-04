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
import { Logout } from './components/Logout/Logout';

import { gameServiceFactory } from './services/gameService';
import { AuthProvider } from './contexts/AuthContext';
import { Delete } from './components/Delete/Delete';
// import { onStartInitalData } from './initialData';


function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const gameService = gameServiceFactory(); //auth.accessToken

  // const [isStarted, setIsStarted] = useState(false);
  // onStartInitalData(isStarted, setIsStarted);
  // console.log(isStarted);

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

  async function onEditGame(values) {
    const result = await gameService.edit(values._id, values)

    setGames(state => state.map(g => g._id === result._id ? result : g));

    navigate(`/games/${values._id}`)
  }

  async function onDeleteGame(gameId) {
    try {
      await gameService.delete(gameId);
      setGames(state => state.filter(g => g._id !== gameId));
    } catch (err) {
      return console.log(err.message);
    }
  }

  // const EnhancedLogin = withAuth(Login)

  return (
    <AuthProvider>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog games={games} />} />
            {/* <Route path='/login' element={<EnhancedLogin />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create-game' element={<Create onGameCreateHandler={onGameCreateHandler} />} />
            <Route path='/games/:gameId' element={<Details />} />
            <Route path='/games/:gameId/edit' element={<Edit onEditGame={onEditGame} />} />
            <Route path='/games/:gameId/delete' element={<Delete onDeleteGame={onDeleteGame} />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
