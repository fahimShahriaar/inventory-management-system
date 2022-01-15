import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './Pages/AdminPage/Admin/Admin';
import BranchOperation from './Pages/AdminPage/Admin/AdminComponents/BranchOperation/BranchOperation';
import ProductManagement from './Pages/AdminPage/Admin/AdminComponents/ProductManagement/ProductManagement';
import Settings from './Pages/AdminPage/Admin/AdminComponents/Settings/Settings';
import Home from './Pages/HomePage/Home/Home';

export const AppContext = createContext();

function App() {
  const [branchList, setBranchList] = useState([]);

  const [displaySetting, setDisplaySetting] = useState({
    branch: true, store: false, bin: false, user: false
  });

  const [displayOperation, setDisplayOperation] = useState({
    receive: true, delivery: false, adjustment: false, internalTransfer: false
  });

  const [displayAction, setDisplayAction] = useState({
    managePd: true, allPd: false
  });

  return (
    <AppContext.Provider value={{
      branchListState: [branchList, setBranchList],
      displaySettingState: [displaySetting, setDisplaySetting],
      displayOperationState: [displayOperation, setDisplayOperation],
      displayActionState: [displayAction, setDisplayAction]
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<Admin />}>
          <Route path="settings" element={<Settings />} />
          <Route path="branch-operation" element={<BranchOperation />} />
          <Route path="product-management" element={<ProductManagement />} />
          <Route path="link3" element={<p>Link3</p>} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
