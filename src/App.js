import logo from './logo.svg';
import './App.css';

import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Header from './components/Header'

import Dashboard from './views/Dashboard'
import Employees from './views/Employees';
import Clients from './views/Clients';
import Sites from './views/Sites';
import Roster from './views/Roster';
import Calls from './views/Calls';
import Events from './views/Events';
import Finance from './views/Finance';
import Reports from './views/Reports';
import Permissions from './views/Permissions';
import Settings from './views/Settings'
import Login from './views/Login';
import SuperAdmin from './views/SuperAdmin'
import Subcontractor from './views/Subcontractor'
import Counter from './features/counter/Counter'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/Employees' element={<Employees />} />
        <Route exact path='/clients' element={<Clients />} />
        <Route exact path='/sites' element={<Sites />} />
        <Route exact path='/roster' element={<Roster />} />
        <Route exact path='/calls' element={<Calls />} />
        <Route exact path='/events' element={<Events />} />
        <Route exact path='/finance' element={<Finance />} />
        <Route exact path='/reports' element={<Reports />} />
        <Route exact path='/permissions' element={<Permissions />} />
        <Route exact path='/settings' element={<Settings />} />
        <Route exact path='/' element={<Login />} />
        <Route exact path='/superadmin' element={<SuperAdmin />} />
        <Route exact path='/subscontractor' element={<Subcontractor />} />
        <Route exact path='/counter' element={<Counter />} />

      </Routes>

  </BrowserRouter>
  );
}

export default App;
