import { useState, useEffect } from 'react';

import * as userService from './services/userServise';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import Table from './components/Table';

function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    userService.getAll()
      .then(data => {
        setUsersData(data)
      } )
      .catch(err => console.log(err.message));
  }, [])



  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">

          <SearchBar />
          <Table usersData={usersData} />
          <button className="btn-add btn">Add new user</button>
          <Pagination />

        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
