import logo from './logo.svg';
import Game from './compontents/Game';
import Demo from './compontents/Demo';
import './App.css';
import Rando from './compontents/Rando';
import Button from './compontents/Button';
import RollDice from './compontents/RollDice';

function App() {
  return (
    <div className="App">
      {/* <Game />
      <Demo dog="boobie" owner="Danni"/>
      <Rando maxNum={8} />
      <Button incrementor={1} /> */}
      <RollDice />
    </div>
  );
}

export default App;
