
// src/App.js
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { useSelector } from 'react-redux';
import CreateBlog from '../features/blogs/CreateBlog';
import CareerDetails from '../features/career/CareerDetails';
import CareerList from '../pages/CareerList';
import Layout from '../pages/Layout';

import { Toaster } from 'react-hot-toast';
import BlogDetail from '../features/blogs/BlogDetail';
import BlogList from '../pages/BlogList';
import HomePage from '../pages/HomePage';



const App = () => {
  const {isCollapsed} = useSelector((state) => state.collapse)
  return (
    <ChakraProvider>
  <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path={'/blogs'} element={<BlogList/>} />
          <Route path={`blogs/:id`} element={<BlogDetail/>} />  
          <Route path={'/createBlog'} element={<CreateBlog label ='blog'/>} /> 
          <Route path={'/updateBlog/:id'} element={<CreateBlog/>} /> 
          <Route path={'/careers'} element={<CareerList/>} /> 
          <Route path={'/createCareer'} element={<CreateBlog label ='career' isCareer={true}/>} /> 
          <Route path={`careers/:id`} element={<CareerDetails/>} />  
          <Route path={'/updateCareer/:id'} element={<CreateBlog isCareer={true} />} />  
        </Routes>
      </Layout>
    </Router>
    <Toaster/>
    </ChakraProvider>

  );
};

export default App;

