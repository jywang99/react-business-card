import './App.css';
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";
import Home from './pages/home/home';
import Edit from './pages/edit/edit';
import Admin from './pages/admin/admin';
import AdminEdit from './pages/admin-edit/adminedit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/admin/edit" element={<AdminEdit />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
