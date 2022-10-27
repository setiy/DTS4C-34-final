import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import PrivateComponent from './components/PrivateComponent';
import Login from './containers/Login';
import MovieList from './containers/MovieList';
import NotFound from './containers/NotFound';
import NowPlaying from './containers/NowPlaying';
import Register from './containers/Register';
import Upcoming from './containers/Upcoming';
import MovieDetail from './containers/MovieDetail';
import TVDetail from './containers/TVDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={
            <PrivateComponent>
              <MovieList />
            </PrivateComponent>} 
          />
          <Route path="movie/:id" element={
            <PrivateComponent>
              <MovieDetail />
            </PrivateComponent>}
          />
          <Route path="tv/:id" element={
            <PrivateComponent>
              <TVDetail />
            </PrivateComponent>}
          />
          <Route path="upcoming" element={<PrivateComponent><Upcoming /></PrivateComponent>} />
          <Route path="now_playing" element={<PrivateComponent><NowPlaying /></PrivateComponent>} />
          <Route path="/" element={
            <PrivateComponent loginOnly={false}>
              <Login />
            </PrivateComponent>} />
          <Route path="register" element={
            <PrivateComponent loginOnly={false}>
              <Register />
            </PrivateComponent>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
