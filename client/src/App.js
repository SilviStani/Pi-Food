import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import CreateRecipe from './Components/CreateRecipe';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={ <LandingPage/> }/>
          <Route path = '/home' element={ <Home/> }/>
          <Route path = '/recipes' element={ <CreateRecipe/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
