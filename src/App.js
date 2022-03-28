import './App.css';
// import Home from "./layout/index"
import Home from "./layout/index1"
import Konsep from "./konsep"
import './css/konsep.css'
import Task from './pages/task'
import Dashboard from './pages/dashboard';
import Tryout from './layout/index2';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Tryout/>} />
      <Route path="dashboard" element={<Dashboard/>} />
      <Route path="task" element={<Task/>} />
    </Routes>
  );
}

export default App;
