import logo from './logo.svg';
import './App.css';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import "./style.css"

function App() {
  return (
    <div className="App">
        <FullName></FullName>
        <Address></Address>
        <ProfilePhoto style = {{borderRadius:"10px"}}></ProfilePhoto>
    </div>
  );
}

export default App;
