import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path = '/' element={ <LandingPage/> }></Route>
          <Route path = '/home' element={ <Home/> }></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
