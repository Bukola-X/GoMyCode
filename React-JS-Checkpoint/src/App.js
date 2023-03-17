import logo from './logo.svg';
import './App.css';
import Images from './Components/images';
import Image from 'react-bootstrap/Image'
import "./style.css"
import BasicForm from './Components/form';

function App() {
  return (
    <div className="App">
     <div><h1 style = {{backgroundColor:"peru",borderRadius:"50px",padding:40,color:"white"}}>React-JS CheckPoint</h1></div>
     <Images></Images>
     <h1><strong>Hotel Booking</strong></h1>
      <p>Experience Something New Every Moment</p>
     <BasicForm></BasicForm>
    </div>
  );
}

export default App;
