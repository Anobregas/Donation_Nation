import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Navbar from "./Components/navbar";
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import CreateCharity from './pages/createCharity';
import SubmitThanks from './pages/submitThanks';
import CharityExpand from './pages/charityExpand';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ApolloProvider client={client}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/submitThanks" element={<SubmitThanks />} />
          <Route path="/createCharity" element={<CreateCharity />} />
          <Route path="/charityExpand" element={<CharityExpand />} />
        </Routes>
        </ApolloProvider>
      </BrowserRouter> 
    </div>
  );
}
