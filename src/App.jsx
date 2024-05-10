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
    <div className='container'>
      <div className='row align-items-center'>
        <BrowserRouter>
          <NavBar />
          {/* Mapeo de las rutas y páginas */}
          <ToDoList />
          <RoutesIndex />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
