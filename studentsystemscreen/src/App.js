
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Appbar from './component/Appbar';
import Home from './component/Home';
import AddStudnet from './component/AddStudent';
import EditStudnet from './component/EditStudent';

function App() {
  return (
    <>
    <Appbar/>
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/add" element={<AddStudnet/>}> </Route>
      <Route path="/edit/:id" element={<EditStudnet/>}> </Route>
    </Routes>
    </>
  );
}

export default App;
