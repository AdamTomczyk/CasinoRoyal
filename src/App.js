import logo from './logo.svg';
import Game from './compontents/Game';
import Demo from './compontents/Demo';
import './App.css';
import Rando from './compontents/Rando';
import Button from './compontents/Button';
import RollDice from './compontents/RollDice';
import Score from './compontents/Score'
import IconList from './compontents/IconList';
import TodoList from './compontents/TodoList';
import Lotto from './compontents/Lotto';
import Coinflip from './compontents/Coinflip';
import RandomColor from './compontents/RandomColor';


function App() {
  return (
    <div className="App">
      {/* <Game />
      <Demo dog="boobie" owner="Danni"/>
      <Rando maxNum={8} />
      <Button incrementor={1} />
      <RollDice />
      <Score />
      <IconList />
      <TodoList />
      <Lotto />
      <Coinflip />
         */}
      <RandomColor />
    </div>
  );
}

export default App;
