import './App.css';
// import Home from './pages/Home';
// import About from './pages/About';
import NavBar from './components/NavBar';
import ToDoList from './components/ToDoList';
// Router
import { BrowserRouter } from 'react-router-dom';
import RoutesIndex from './routes/RoutesIndex';

function App() {
  return (
    <div id='container'>
      <BrowserRouter>
        <NavBar />
        <RoutesIndex />
        <ToDoList />
      </BrowserRouter>
    </div>
  );
}

export default App;
