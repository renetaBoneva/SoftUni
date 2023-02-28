
import Description from './components/Description';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';

function App() {
  return (
    <div>
      <Navigation />
    	<Header />
      <div className="container">
        <Description />

        <Speakers />

        <Tickets />

        <Schedule />

        <Footer />
      </div>
    </div>
      );
}

export default App;
