import './App.css';
import About from './Components/About';
import Banner from './Components/Banner';
import Contact from './Components/Contact';
import Header from './Components/Header'
import Services from './Components/Services';
import Skills from './Components/Skills';
import Work from './Components/Work';

function App() {

  return (
    <div className="App">
   <Header />
   <Banner/>
   <About/>
   <Skills/>
   <Services/>
   <Work/>
   <Contact/>
   <footer> <p>copyright &copy;Sami Maachi </p></footer>
    </div>
  );
}

export default App;
