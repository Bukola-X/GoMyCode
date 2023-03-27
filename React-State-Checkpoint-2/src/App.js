// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import logo from './logo.svg';
import React from 'react';
import {Component} from 'react';
import './App.css';
import Display from './component/Display';

class App extends Component {
  constructor(props){
    super(props)

  this.state={
    person:
      {
        fullName:'ADENIGBA EZEKIEL ROTIMI',
        bio:'5ft9inches tall,dark in complexion,weigh 180 pounds',
        imgSrc:<img  style={{height:"180px", width:"180px"}}src={require(./asset/pexels-photo-4560080.webp)} alt="photos"/>,
        proFession:'full stack web developer',
        show:true
    }
    this.handleAppear=this.handleAppear.bind(this)

  };
  // this.handleAppear=this.handleAppear.bind(this)
}
   handleAppear=()=>{(this.state.person.show)===false?this.setState({...this.state.person,show:true}):this.setState({...this.state.person,show:false})};
  render(){
          return (
            <div className="App">
              <Display profile={this.state.person} handleShow={this.handleAppear}/>
               <div className="btn"><button onClick={()=>this.handleAppear()}>showstate</button></div> 
             </div>
          );
  };
}

export default App;

// export default App;
