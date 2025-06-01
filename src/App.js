import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import JobsList from './components/JobsList';
import JobDetail from './components/JobDetail';
import Avuleti from './components/Avuleti';

function App() {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to='/'>Home</Link> | <Link to='/about'>About</Link> |{' '}
        <Link to='/dashboard'>Dashboard</Link> | <Link to='/jobs'>Jobs</Link> |{' '}
        <Link to='/avuleti'>AvuletI</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/avuleti' element={<Avuleti />} />

        {/* Dashboard with nested routes */}
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='analytics' element={<Analytics />} />
          <Route path='settings' element={<Settings />} />
        </Route>

        {/* Jobs and dynamic job detail */}
        <Route path='/jobs' element={<JobsList />} />
        <Route path='/jobs/:id' element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;
