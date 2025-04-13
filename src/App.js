import React from 'react';
import './App.scss';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/pages/navbar/Navbar';
import Topbar from './components/pages/topbar/Topbar';
import Footer from './components/pages/footer/Footer';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Profile from './pages/profile/Profile';
import NewsCreateEdit from './pages/news/NewsCreateEdit';
import NewsDetail from './pages/news/NewsDetail';
import NewsList from './pages/news/NewsList';

function App() {
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <div className='pt-4'>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/profile' element={
            <ProtectedRoute isRequireUser>
              <Profile />
            </ProtectedRoute>
          }></Route>
          <Route path='/category/:category' element={<Category />}></Route>
          <Route path='/news/detail/:newsId' element={<NewsDetail />}></Route>
          <Route path='/news/list/:userId' element={<NewsList />}></Route>
          <Route path='/news/create' element={
            <ProtectedRoute isRequireUser>
              <NewsCreateEdit />
            </ProtectedRoute>
          }></Route>
          <Route path='/news/edit/:newsId' element={
            <ProtectedRoute isRequireUser>
              <NewsCreateEdit />
            </ProtectedRoute>
          }></Route>
          <Route path='/login' element={
            <ProtectedRoute restricted>
              <Login />
            </ProtectedRoute>
          }></Route>
          <Route path='/register' element={
            <ProtectedRoute restricted>
              <Register />
            </ProtectedRoute>
          }></Route>
        </Routes>
      </div>
      <Footer />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
      />
    </>
  );
}

export default App;
