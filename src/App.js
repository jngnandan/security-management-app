import logo from './logo.svg';
import './App.css';

import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Header from './components/Header'

import Dashboard from './views/Dashboard'
import Workforce from './views/Workforce';
import Clients from './views/Clients';
import Sites from './views/Sites';
import Roster from './views/Roster';
import Calls from './views/Calls';
import Events from './views/Events';
import Finance from './views/Finance';
import Reports from './views/Reports';
import Permissions from './views/Permissions';
import Settings from './views/Settings'
import ViewClient from './views/Clients/ViewClient';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route path='/workforce' element={<Workforce />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/sites' element={<Sites />} />
        <Route path='/roster' element={<Roster />} />
        <Route path='/calls' element={<Calls />} />
        <Route path='/events' element={<Events />} />
        <Route path='/finance' element={<Finance />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/permissions' element={<Permissions />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/clients/:id' element={<ViewClient />} />
      </Routes>

  </BrowserRouter>
  );
}

export default App;
