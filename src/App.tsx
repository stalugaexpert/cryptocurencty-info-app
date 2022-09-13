import { Layout, Space, Typography } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Cryptocurrencies from './components/cryptocurrencies';
import CryptoDetails from './components/cryptoDetails';
import Exchanges from './components/exchanges';
import Homepage from './components/homepage';
import Navbar from './components/navbar';
import News from './components/news';

const Container = styled.div`
  
`;

const NavbarContainer = styled.div`
  
`;

const MainContainer = styled.div`
  
`;

const FooterContainer = styled.div`
  
`;

const App = (): JSX.Element => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route
              element={ <Homepage /> }
              path="/"
            />
            <Route
              element={ <Exchanges /> }
              path="/exchanges"
            />
            <Route
              element={ <Cryptocurrencies simplified={ false } /> }
              path="/cryptocurrencies"
            />
            <Route
              element={ <CryptoDetails /> }
              path="/crypto/:coinId"
            />
            <Route
              element={ <News simplified={ false } /> }
              path="/news"
            />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title
          level={ 5 }
          style={ { color: 'white', textAlign: 'center' } }
        >
          Cryptoverse
          { ' ' }
          <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
