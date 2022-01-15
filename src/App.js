import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import BranchOperation from './components/Admin/BranchOperation/BranchOperation';
import ProductManagement from './components/Admin/ProductManagement/ProductManagement';
import Settings from './components/Admin/Settings/Settings';
import Home from './components/Home/Home';

export const AppContext = createContext();

function App() {
  const [branchList, setBranchList] = useState([]);
  const [displaySetting, setDisplaySetting] = useState({
    branch: true, store: false, bin: false, user: false
  });
  const [displayOperation, setDisplayOperation] = useState({
    receive: true, delivery: false, adjustment: false, internalTransfer: false
  });

  return (
    <AppContext.Provider value={{
      branchListState: [branchList, setBranchList],
      displaySettingState: [displaySetting, setDisplaySetting],
      displayOperationState: [displayOperation, setDisplayOperation]
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
