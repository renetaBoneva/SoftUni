import { useState, useEffect } from 'react';

import * as userService from './services/userServise';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import Table from './components/Table';

function App() {
  const [usersData, setUsersData] = useState([]);
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    userService.getAll()
      .then(data => {
        setUsersData(data)
      })
      .catch(err => console.log(err.message));
  }, [])

  function onUserCreateSubmit(event, createOrEdit, setCreateOrEdit, _id) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    switch (createOrEdit) {
      case 'edit': ;
        userService.editUser(data, _id)
          .then(res => setUsersData(state => state.map(s => s._id === res._id ? res : s)))
          .catch(err => console.log(err.message));
        setCreateOrEdit('create');
        setFormData(null)
        break;
      case 'create':
        userService.createUser(data)
          .then(res => {
            setUsersData(state => { return [...state, res] });
            setFormData(null);
          })
          .catch(err => console.log(err.message));
        break;
      default:
        break;
    }
  }

  function deleteUserHandler(_id, setDeleteUserById) {
    userService.deleteUser(_id)
      .then(result => {
        setUsersData(state => state.filter(s => s._id !== _id))
        setDeleteUserById(null)
      })
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
            deleteUserHandler={deleteUserHandler}
            formData={formData}
            setFormData={setFormData}
          />
          <Pagination />

        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
