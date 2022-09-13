import { CheckOutlined, DollarCircleOutlined, ExclamationCircleOutlined, FundOutlined, MoneyCollectOutlined, NumberOutlined, StopOutlined, ThunderboltOutlined, TrophyOutlined } from '@ant-design/icons';
import { Col, Row, Select, Typography } from 'antd';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../../services/cryptoApi';
import LineChart from '../lineChart';

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = (): JSX.Element => {
  const [timePeriod, setTimePeriod] = useState('7d');
  const { coinId } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <span>Loading...</span>;

  console.log(cryptoDetails);

  const time = ['1h', '3h', '12h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];
  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${'NaN' || millify(cryptoDetails['24hVolume'])}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`, icon: <TrophyOutlined /> }
  ];
  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails.supply.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${millify(cryptoDetails.supply.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails.supply.circulating)}`, icon: <ExclamationCircleOutlined /> }
  ];

  return (

    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title
          className="coin-name"
          level={ 2 }
        >
          { cryptoDetails.name }
          { ' ' }
          (
          { cryptoDetails.symbol }
          )
          Price
        </Title>
        <p>
          { cryptoDetails.name }
          { ' ' }
          live price in US dollars.
          View value statistics, market cap and supply.
        </p>
      </Col>
      <Select
        className="select-timeperiod"
        defaultValue="7d"
        onChange={ (value): void => setTimePeriod(value) }
        placeholder="Select Time Period"
      >
        { time.map((date) => <Option key={ date }>{ date }</Option>) }
      </Select>
      <LineChart
        coinHistory={ coinHistory }
        coinName={ cryptoDetails.name }
        currentPrice={ millify(cryptoDetails.price) }
      />
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title
              className="coin-details-heading"
              level={ 3 }
            >
              { cryptoDetails.name }
              { ' ' }
              Value Statistics
            </Title>
            <p>
              An overview showing the stats of
              { ' ' }
              { cryptoDetails.name }
            </p>
          </Col>
          { stats.map(({ icon, title, value }) => (
            <Col
              key={ title }
              className="coin-stats"
            >
              <Col className="coin-stats-name">
                <Text>{ icon }</Text>
                <Text>{ title }</Text>
              </Col>
              <Text className="stats">{ value }</Text>
            </Col>
          )) }
        </Col>
        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title
              className="coin-details-heading"
              level={ 3 }
            >
              Other Statistics
            </Title>
            <p>
              An overview showing the stats of all cryptocurrencies
            </p>
          </Col>
          { genericStats.map(({ icon, title, value }) => (
            <Col
              key={ title }
              className="coin-stats"
            >
              <Col className="coin-stats-name">
                <Text>{ icon }</Text>
                <Text>{ title }</Text>
              </Col>
              <Text className="stats">{ value }</Text>
            </Col>
          )) }
        </Col>
      </Col>
      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title
            className="coin-details-heading"
            level={ 3 }
          >
            What is
            { ' ' }
            { cryptoDetails.name }
            ?
            { HTMLReactParser(cryptoDetails.description) }
          </Title>
        </Row>
        <Col className="coin-links">
          <Title
            className="coin-details-heading"
            level={ 3 }
          >
            { cryptoDetails.name }
            { ' ' }
            Links
          </Title>
          { cryptoDetails.links.map((link: any) => (
            <Row
              key={ link.name }
              className="coin-link"
            >
              <Title
                className="link-name"
                level={ 5 }
              >
                { link.type }
              </Title>
              <a
                href={ link.url }
                rel="noreferrer"
                target="_blank"
              >
                { link.name }
              </a>
            </Row>
          )) }
        </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
