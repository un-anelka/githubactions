import './App.css';
import { Bye } from './Component/Bye';
import Greet from './Component/Greet';

const App = () => {

  const handleClick = () => {
    console.log("RUDASINGWA what are you doing?")
  }
  const handleOpen = () => {
    console.log("RUDASINGWA Open this link?")
  }
  return (
    <div className="App">
      < Greet name="UN" subject="math" >
        <p>This is the children content!</p>
      </Greet>
      < Greet name="RAF" subject="Physics" />
      < Greet name="UN R." subject="Chemistry" onClick={handleClick}></Greet>
      < Greet name="Valens" subject="Biology">
        <button onClick={handleOpen}>Click here to play</button>
        <Bye />
      </Greet>
    </div>
  );
}

export default App;
