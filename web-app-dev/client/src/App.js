import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

// Screens
import HomeScreen from './Screens/HomeScreen';
import AboutScrean from './Screens/AboutScrean';
import TestScreen from './Test/TestScreen';

function App() {
  return (
    <div className="App">
      <h1>IEEE Official Web Site</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/home' element={< HomeScreen/>} />
          <Route path='/about' element={< AboutScrean/>} />


          {/* test route */}
          <Route path='/test' element={< TestScreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
