import { Outlet, Route, Routes } from 'react-router-dom';
import AboutPage from './AboutPage/AboutPage';
import './App.css';
import BlogPage from './BlogPage/BlogPage';
import ContactsPage from './Contacts/Contacts';
import FooterPage from './FooterPage/FooterPage';
import HeaderPage from './HeaderPage/HeaderPage';
import IndexPage from './IndexPage/IndexPage';
import Accessories from './Products/Accessories/Accessories';
import BeautyPage from './Products/BeautyPage/BeautyPage';
import ClothesPage from './Products/ClothesPage/ClothesPage';
import ProductsPage from './Products/ProductsPage/ProductsPage';
import WomenClothesPage from './Products/WomenClothesPage/WomenClothesPage';

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<IndexPage/>}/>
        </Route>
        <Route path={'about'} element={<AboutPage/>}/>
        <Route path={'clothes'} element={<ClothesPage/>}>
            <Route index/>
        </Route>
        <Route path={'products'} element={<BijouteriePage/>}/>
        <Route path={'blog'} element={<BlogPage/>}/>
        <Route path={'contacts'} element={<ContactsPage/>}/>
    </Routes>
  );
}

function ClothesLayout() {
  return (
    <div>
      <h1>WomenClothesPage</h1>
      <Outlet/>
    </div>
  )
}

function Layout() {
  return (
    <div className="App" data-test-id="App">
      <HeaderPage/>
      <main className={`content`}>
          <Outlet/>   
      </main>
      <FooterPage/>
    </div>
  )
}

export default App;
