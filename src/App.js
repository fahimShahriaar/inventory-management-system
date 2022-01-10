import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Settings from './components/Admin/Settings/Settings';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/*" element={<Admin />}>
        <Route path="settings" element={<Settings />} />
        <Route path="branch-operation" element={<p>Branch operation</p>} />
        <Route path="link3" element={<p>Link3</p>} />
      </Route>
    </Routes>
  );
}

export default App;
