import {useState, useEffect} from 'react';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";

function App() {
  let [todoData, setTodoData] = useState([])

  useEffect(()=> {
    fetch('http://localhost:3030/jsonstore/todos')
      .then(res => res.json())
      .then(data => {
        setTodoData(Object.values(data))
      })
  }, [])

  let handleStatus = (id) => {
    setTodoData(state => state.map(x => {
      if(x._id === id) {
        console.log({...x, isCompleted: !x.isComleted});
      }
      return x._id === id ? {...x, isCompleted: !x.isComleted} : x;
    }))
  }

  return (
    <div >
      <Header />

      {/* <!-- Main content --> */}
      <main className="main">

        {/* <!-- Section container --> */}
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">
            <TodoList todoData={todoData} handleStatus={handleStatus} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
