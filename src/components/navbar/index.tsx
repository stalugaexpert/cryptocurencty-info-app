import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MenuOutlined,
  MoneyCollectOutlined
} from '@ant-design/icons';
import { Avatar, Button, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import icon from '../../assets/cryptocurrencies.png';

const Container = styled.div`
  
`;

const LogoContainer = styled.div`
  
`;

const MenuControlContainer = styled.button`
  
`;

const Navbar = (): JSX.Element => (
  <div className="nav-container">
    <div className="logo-container">
      <Avatar
        size="large"
        src={ icon }
      />
      <Typography.Title
        className="logo"
        level={ 2 }
      >
        <Link to="/">Crytoverse</Link>
      </Typography.Title>
      <Button className="menu-control-container" />
    </div>
    <Menu theme="dark">
      <Menu.Item icon={ <HomeOutlined /> }>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item icon={ <FundOutlined /> }>
        <Link to="/cryptocurriencies">Cryptocurriencies</Link>
      </Menu.Item>
      <Menu.Item icon={ <MoneyCollectOutlined /> }>
        <Link to="/exchanges">Exchanges</Link>
      </Menu.Item>
      <Menu.Item icon={ <BulbOutlined /> }>
        <Link to="/news">News</Link>
      </Menu.Item>
    </Menu>
  </div>
);

export default Navbar;
