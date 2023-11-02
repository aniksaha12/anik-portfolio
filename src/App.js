import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
       <Header/>
       <Banner/>
      <About/>
      <Services/>
      <Resume/>
      <Testimonial/>
      <Portfolio/>
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
