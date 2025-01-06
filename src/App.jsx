import {
   Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider }
  from 'react-router-dom';

import React from 'react';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';

// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import JobListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
       <Route index element={<HomePage />} />
      </Route>
)
)

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
