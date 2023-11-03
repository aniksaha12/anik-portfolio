import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';


function App() {
  return (
    <div className="App">
       <Header/>
       <Banner/>
      <About/>


      <Resume/>
   
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
