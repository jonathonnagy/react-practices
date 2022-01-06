import './App.css';
import TextInDiv from './TextInDiv'

const textForButton = 'New text is here!';

function App() {
  return (
    <div className="App">
      <TextInDiv text={textForButton} />
    </div>
  );
}

export default App;
