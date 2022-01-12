import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {TodoPage} from './pages/todo';

export function Rotas(){
    return (
      <>
      <Router>
        <Routes>
          <Route path="/" element={<TodoPage/>}/>
        </Routes>
      </Router>
      </>
    );
  }