import './App.css';
import ItsMeFrog from './pages/itsMeFrog.js';
import footer from './resources/misc/footer.png'

function App() {
  return (
    <div>
      <ItsMeFrog />
      <img class = 'footer' src = {footer}/>
    </div>
  );
}

export default App;
