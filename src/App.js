import './App.css';
import Header from './Components/Head/Header';
import Home from './Components/Hero/Home';
import Features from './Components/Features/Features';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Portfolio />
      {/* <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
