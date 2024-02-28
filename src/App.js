import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Create from "./Pages/Create";
import Remove from "./Pages/Remove";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/Create" element={<Create/>}/>
          <Route path= "/Remove" element={<Remove/>}/>
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
