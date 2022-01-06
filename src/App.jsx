import './App.css';
import ButtonInDiv from './ButtonInDiv';

const textForButton = 'New text is here!';

function App() {
  return (
    <div className="App">
      <ButtonInDiv text={textForButton} />
    </div>
  );
}

export default App;
