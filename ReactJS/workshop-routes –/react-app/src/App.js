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
import { authServiceFactory } from './services/authService';
import { AuthContext } from './contexts/AuthContext';
import { Delete } from './components/Delete/Delete';
// import { onStartInitalData } from './initialData';


function App() {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [auth, setAuth] = useState({});
  const gameService = gameServiceFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken);

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

  async function onLoginSubmit(data) {
    try {
      const res = await authService.postLogin(data);
      setAuth(res);
      navigate('/catalog');
    } catch (err) {
      console.log(err.message);
    }
  }

  async function onRegisterSubmit(data) {
    if (data.confirmPassword !== data.password) {
      return console.log("Password mismatch!");
    }
    const { confirmPassword, ...postData } = data;

    try {
      const res = await authService.postRegister(postData);
      setAuth(res);
      navigate('/catalog');
    } catch (err) {
      console.log(err.message);
    }
  }

  async function onLogout() {
    return setAuth({});
  }

  async function onDeleteGame(gameId) {
    try {
      const res = await gameService.delete(gameId);
      setGames(state => state.filter(g => g._id !== gameId));
    } catch (err) {
      return console.log(err.message);
    }
  }

  const context = {
    onDeleteGame,
    onLoginSubmit,
    onLogout,
    onRegisterSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken
  }

  return (
    <AuthContext.Provider value={context}>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog games={games} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create-game' element={<Create onGameCreateHandler={onGameCreateHandler} />} />
            <Route path='/games/:gameId' element={<Details />} />
            <Route path='/games/:gameId/edit' element={<Edit />} />
            <Route path='/games/:gameId/delete' element={<Delete />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
