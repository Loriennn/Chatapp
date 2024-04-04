
import { useState , useRef} from 'react';
import './App.css';
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie';
import {Chat} from './components/Chat';
import spring from './assets/spring.jpeg';

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)

  const roomInputRef = useRef(null);
  
   if(!isAuth){
  
  return (

    
    <div className="App">
      <Auth/> 
    </div>
  );
}
  return (
    <div className='home'  style={{background: `url(${spring})`}}>
      {room ? (
       <Chat room={room}/>
      ) : (
        <div className='room'>
          <label>Enter Room Name:</label>
          <input ref={roomInputRef}/>
          <button onClick={()=> setRoom(roomInputRef.current.value)}>Enter Chat</button>
        </div>
      )}
    </div>
  );
  
  
}

export default App;
