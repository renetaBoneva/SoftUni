
import './App.css';
import Counter from './components/Counter';
import MoviesList from './components/MoviesList';
import Timer from './components/Timer';

const movies = [
  {title: "Хари Потър и Нечистокръвния принц", year: 2009, cast: ["Даниъл Радклиф", "Ема Уотсън"]},
  {title: "Любовта е опиат", year: 2010, cast: ["Ан Хатауей", "Катрин Уинг"]},
  {title: "Дърти хлапета", year: 2010, cast: ["Адам Сандлър", "Салма Хайек"]},
]

function App() {
  return (
    <div clasName="App">
      <h1>React Demo</h1>
      <Counter />
      <Timer seconds={0}/>
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
