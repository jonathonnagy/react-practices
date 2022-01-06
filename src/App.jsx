import './App.css';
// import ButtonListWithFor from './ButtonListWithFor';
import ButtonListWithMap from './ButtonListWithMap';
import Profile from './Profile';
import Profile2 from './Profile2';
import Profile3 from './Profile3';
import Profile4 from './Profile4';



function App() {
  return (
    <div className="App">
      {/* <ButtonListWithFor /> */}
      <ButtonListWithMap />
      <Profile />
      <Profile2 />
      <Profile3 />
      <Profile4 />
    </div>
  );
}

export default App;
