import './App.css';
import './components/header';
import Header from './components/header';
import background from './resources/windows.png'
import Clickable from './components/clickable'
import Y2kTimer from './components/y2kTimer'
import Home from './pages/Home';
import Window from './components/window';

function App() {
  return (
    <div className='bg'>
      {/* <img class="bg" src={background} alt="" /> */}
      {/* <Home></Home> */}
      <Clickable title={"ILOVEYOU"} text={"hi"} />
      <Y2kTimer />
      <Header></Header>
      <Window></Window>
      {/* <emailPopup></emailPopup> */}
    </div>
  );
}

export default App;
