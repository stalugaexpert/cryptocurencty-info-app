import { Col, Row, Statistic, Typography } from 'antd';
import millify from 'millify';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../../services/cryptoApi';

const { Title } = Typography;

const Homepage = (): JSX.Element => {
  const { data, isFetching } = useGetCryptosQuery();

  console.log(data);

  return (
    <>
      <Title
        className="heading"
        level={ 2 }
      >
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={ 12 }>
          <Statistic
            title="Total Cryptocurrencies"
            value="5"
          />
        </Col>
        <Col span={ 12 }>
          <Statistic
            title="Total Exchanges"
            value="5"
          />
        </Col>
        <Col span={ 12 }>
          <Statistic
            title="Total Market Cap"
            value="5"
          />
        </Col>
        <Col span={ 12 }>
          <Statistic
            title="Total 24h Volume"
            value="5"
          />
        </Col>
        <Col span={ 12 }>
          <Statistic
            title="Total Markets"
            value="5"
          />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
