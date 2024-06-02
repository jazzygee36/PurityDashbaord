import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Profile from './pages/profile/profile';
import Billings from './pages/billing/billings';
import Table from './pages/table/table';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/table' element={<Table />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/billing' element={<Billings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
