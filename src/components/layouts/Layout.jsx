// Layout.js
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = () => {
  return (
    <div className=' overflow-x-hidden'>
      <Navbar/>
      <main>
        <Outlet /> {/* This is where the routed page content will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
