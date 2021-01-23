import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import WeDo from './pages/WeDo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <WeDo/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
