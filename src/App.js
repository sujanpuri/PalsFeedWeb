import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Message from './Routes/Message';
import Profile from './Routes/profile';
import Home from './Routes/Home';

function App() {
  return (
    <div className='bg-black'>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
