import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/List';
import AddUserForm from './components/Addform';
import './App.css';
const App = () => {
  

  return (
    <div>
      <Router>
            <h1>Pagination User System</h1>
      <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddUserForm />} />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;