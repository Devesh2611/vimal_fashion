import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Contacts from './Pages/Contacts';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import NotFound from './Pages/NotFound';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/Vimal_Fashion'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/New' element={<ShopCategory category="New" />} />
          <Route path='/Banarasi' element={<ShopCategory category="Banarasi" />} />
          <Route path='/Patola' element={<ShopCategory category="Patola" />} />
          <Route path='/Kanjivaram' element={<ShopCategory category="Kanjivaram" />} />
          <Route path='/Chanderi' element={<ShopCategory category="Chanderi" />} />
          <Route path='/Sambalpuri' element={<ShopCategory category="Sambalpuri" />} />
          <Route path='/Mysore_Silk' element={<ShopCategory category="Mysore Silk" />} />
          <Route path='/Bhujodi' element={<ShopCategory category="Bhujodi" />} />
          <Route path='/Nauvari' element={<ShopCategory category="Nauvari" />} />
          <Route path='/Silk' element={<ShopCategory category="Silk" />} />
          <Route path='/Cotton' element={<ShopCategory category="Cotton" />} />
          <Route path='/Georgette' element={<ShopCategory category="Georgette" />} />
          <Route path='/Chiffon' element={<ShopCategory category="Chiffon" />} />
          <Route path='/Net' element={<ShopCategory category="Net" />} />
          <Route path='/Wool' element={<ShopCategory category="Wool" />} />
          <Route path='/Jute' element={<ShopCategory category="Jute" />} />
          <Route path='/Satin' element={<ShopCategory category="Satin" />} />
          <Route path='/Black_Print' element={<ShopCategory category="Black Print" />} />
          <Route path='/Zari_Work' element={<ShopCategory category="Zari Work" />} />
          <Route path='/Floral' element={<ShopCategory category="Floral" />} />
          <Route path='/Leheriya' element={<ShopCategory category="Leheriya" />} />
          <Route path='/Bandhani' element={<ShopCategory category="Bandhani" />} />
          <Route path='/Embroidery' element={<ShopCategory category="Embroidery" />} />
          <Route path='/Product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
