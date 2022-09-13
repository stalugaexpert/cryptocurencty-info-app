import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MenuOutlined,
  MoneyCollectOutlined
} from '@ant-design/icons';
import { Avatar, Button, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';

import icon from '../../assets/cryptocurrencies.png';

const items = [
  { label: (<Link to="/">Home</Link>), key: 'home', icon: <HomeOutlined /> },
  { label: (<Link to="/cryptocurrencies">Cryptocurrencies</Link>), key: 'cryptocurrencies', icon: <FundOutlined /> },
  { label: (<Link to="/exchanges">Exchanges</Link>), key: 'exchanges', icon: <MoneyCollectOutlined /> },
  { label: (<Link to="/news">News</Link>), key: 'news', icon: <BulbOutlined /> }
];

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
    <Menu
      items={ items }
      theme="dark"
    />
  </div>
);

export default Navbar;
