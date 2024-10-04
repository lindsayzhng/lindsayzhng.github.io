import logo from './logo.svg';
import './App.css';
import './components/header';
import Header from './components/header';
import background from './resources/windows.png'
import Clickable from './components/clickable'
import Home from './pages/Home';

function App() {
  return (
    <div className='bg'>
      {/* <img class="bg" src={background} alt="" /> */}
      {/* <Home></Home> */}
      <Clickable title={"ILOVEYOU"} text={"hi"} />
      <Header></Header>
      {/* <emailPopup></emailPopup> */}
    </div>
  );
}

export default App;
