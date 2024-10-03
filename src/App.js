import logo from './logo.svg';
import './App.css';
import './components/header';
import Header from './components/header';
import background from './resources/windows.png'

function App() {
  return (
    <div>
      <img class="bg" src={background} alt="" />
      <Header></Header>
      {/* <emailPopup></emailPopup> */}
    </div>
  );
}

export default App;
