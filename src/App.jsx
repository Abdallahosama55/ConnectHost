// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <Router>
      <Routes>
        {/* The Layout component wraps all these routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
