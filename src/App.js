import './index.css';
import Home from './routes/Home.js';
import Contact from './routes/Contact.js';
import Project from './routes/Project.js';
import About from './routes/About.js';
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/project"element={<Project/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/about"element={<About/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
