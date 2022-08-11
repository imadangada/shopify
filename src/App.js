import logo from './logo.svg';
import './App.css';
import Header from './header';
import Shopify from './shopify';
import Storefront from './storefront';
import Pwa from './pwa';
import Customers from './customers';
import Blog from './blog';
import Footer from './footer';
import Subfooter from './subfooter';

function App() {
  return (
    <div>
     <Header />
     <Storefront />
     <Pwa />
     <Customers />
     <Subfooter />
     <Footer />
    </div>
  );
}

export default App;
