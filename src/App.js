import logo from './logo.svg';
import './App.css';
import './components/header';
import Header from './components/header';
import background from './resources/windows.png'
import Window from './components/window';

function App() {
  return (
    <div className='bg'>
      {/* <img class="bg" src={background} alt="" /> */}
      <Header></Header>
      <Window></Window>
      {/* <emailPopup></emailPopup> */}
    </div>
  );
}

export default App;
