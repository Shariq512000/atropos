import logo from './logo.svg';
import './App.css';
import Atropos from 'atropos/react';
// import "atropos/atropos.css";
import bg from "./img/1d8efe928eae32e7489bb0cca0fdf1d7.png";
import middle from "./img/purepng.com-treenaturetreegreensummer-831524002233ibnn9.png";
import front from "./img/uBxy9n-cartoon-charactersthe-boss-baby-pngu.png";
import MyImage from './MyImage';

function App() {
  return (
    //  <div id="app">
    //   {/* Atropos */}
    //   <Atropos className="my-atropos">
    //     {/* ... */}
    //   </Atropos>
    // </div>

      <MyImage />

    // <div id="app">
    //   <Atropos
    //     // activeOffset={40}
    //     // shadowScale={1.05}
    //     // onEnter={() => console.log('Enter')}
    //     // onLeave={() => console.log('Leave')}
    //     // onRotate={(x, y) => console.log('Rotate', x, y)}
    //     className="my-atropos"
    //   >
    //     <img src={bg} data-atropos-offset="-5" />
    //     <img src={middle} data-atropos-offset="0" />
    //     <img src={front} data-atropos-offset="5" />
    //   </Atropos>

    // </div>
    // {/* <Atropos>
      
    //   Element with negative offset will move in reverse direction,
    //   making it appear behind the scene
      
    //   <img src="image-bg.png" data-atropos-offset="-5" />
      
    //   Element with no offset will not move
      
    //   <img src="image-middle.png" data-atropos-offset="0" />
      
    //   Element with positive offset will move in same direction,
    //   making it appear in front of the scene
      
    //   <img src="image-front.png" data-atropos-offset="5" />
    // </Atropos> */}
    

    
  );
}

export default App;
