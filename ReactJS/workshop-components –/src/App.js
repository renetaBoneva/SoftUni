import { useState, useEffect } from 'react';

import * as userService from './services/userServise';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import Table from './components/Table';

function App() {
  const [usersData, setUsersData] = useState([]);
  const [isCreated, setIsCreated] = useState(true);
  const [isShowDelete, setIsShowDelete] = useState(true);

  useEffect(() => {
    userService.getAll()
      .then(data => {
        setUsersData(data)
      })
      .catch(err => console.log(err.message));
  }, [])

  function onUserCreateSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);


    userService.createUser(data)
      .then(res => {
        setUsersData(state => { return [...state, res] })
        setIsCreated(false);
      })
      .catch(err => console.log(err.message));
  }

  function deleteUserHandler(_id) {
    userService.deleteUser(_id)
      .then(setIsShowDelete(false))
      .catch(err => console.log(err.message))
  }


  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">

          <SearchBar />
          <Table 
            usersData={usersData} 
            onUserCreateSubmit={onUserCreateSubmit} 
            isCreated={isCreated} 
            deleteUserHandler={deleteUserHandler}
            setIsShowDelete={isShowDelete}
            />
          <Pagination />

        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
