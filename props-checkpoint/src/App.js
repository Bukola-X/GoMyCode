import './App.css';
import ParentHandleName from './Profile/Parent-HandleName';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
       <h2>React-Props-Checkpoint</h2>
       <Profile fullName = "Akinjide Bukola" bio = "Budding FrontEnd Engineer" profession = "Software Engineering">
        <img
        src = {require("./assets/kevin.jpeg")}
        alt = "child props"
        className = "kev"
        />
       </Profile>
       <ParentHandleName></ParentHandleName>
    </div>
  );
}

export default App;
