import './App.css';
import {Routes,Route} from 'react-router-dom'
import ShowAll from './components/ShowAll';
import Create from './components/Create';
import ShowOne from './components/ShowOne';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ShowAll/>}/>
        <Route path='/new' element={<Create/>}/>
        <Route path='/author/:id' element={<ShowOne/>}/>
        <Route path='/author/:id/update' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;

