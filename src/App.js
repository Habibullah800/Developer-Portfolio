import './App.css';
import Header from './Components/Head/Header';
import Home from './Components/Hero/Home';
import Features from './Components/Features/Features';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Testimonial from './Components/Testimonial/Testimonial';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
