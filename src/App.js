import './App.css';
import './background.css'
import AboutMe from './pages/AboutMe.js';

function App() {
  return (
    <div>
      <div class = "background" style={{ minHeight: '100vh' }} />
      <AboutMe />
    </div>
  );
}

export default App;
