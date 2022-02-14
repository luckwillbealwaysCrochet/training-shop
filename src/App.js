import { Outlet, Route, Routes } from 'react-router-dom';
import AboutPage from './AboutPage/AboutPage';
import './App.css';
import BlogPage from './BlogPage/BlogPage';
import ContactsPage from './Contacts/Contacts';
import FooterPage from './FooterPage/FooterPage';
import HeaderPage from './HeaderPage/HeaderPage';
import IndexPage from './IndexPage/IndexPage';
import BijouteriePage from './Products/BijouteriePage/BijouteriePage';
import MenClothesPage from './Products/MenClothesPage/MenClothesPage';
import WomenClothesPage from './Products/WomenClothesPage/WomenClothesPage';

function App() {
  return (
    <Routes>
        <Route path={'/'} element={<Layout/>}>
            <Route index element={<IndexPage/>}/>
        </Route>
        <Route path={'/about'} element={<AboutPage/>}/>
        <Route path={'/women'} element={<WomenClothesPage/>}/>
        <Route path={'/men'} element={<MenClothesPage/>}/>
        <Route path={'/products'} element={<BijouteriePage/>}/>
        <Route path={'/blog'} element={<BlogPage/>}/>
        <Route path={'/contact'} element={<ContactsPage/>}/>
    </Routes>
  );
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
