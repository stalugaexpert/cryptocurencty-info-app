import { Card, Col, Input, Row } from 'antd';
import millify from 'millify';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../../services/cryptoApi';

type ComponentAttributes = {
  simplified: boolean;
}

const Cryptocurrencies = ({ simplified }: ComponentAttributes): JSX.Element => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin: any) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <p>Loading...</p>;

  return (
    <>
      { !simplified
          && (
            <div className="search-crypto">
              <Input
                onChange={ (e): void => setSearchTerm(e.target.value) }
                placeholder="Search Cryptocurrency"
                size="large"
              />
            </div>
          ) }
      <Row
        className="crypto-card-container"
        gutter={ [32, 32] }
      >
        { cryptos?.map((currency: any) => (
          <Col
            key={ currency.uuid }
            className="crypto-card"
            lg={ 6 }
            sm={ 12 }
            xs={ 24 }
          >
            <Link to={ `/crypto/${currency.uuid}` }>
              <Card
                className="crypto-card-container-border"
                extra={ (
                  <img
                    alt={ `${currency.name} icon` }
                    className="crypto-image"
                    src={ currency.iconUrl }
                  />
                ) }
                hoverable
                title={ `${currency.rank}. ${currency.name}` }
              >
                <p>
                  Price:
                  { ' ' }
                  { millify(currency.price) }
                </p>
                <p>
                  Market Cap:
                  { ' ' }
                  { millify(currency.marketCap) }
                </p>
                <p>
                  Daily Change:
                  { ' ' }
                  { millify(currency.change) }
                </p>
              </Card>
            </Link>
          </Col>
        )) }
      </Row>
    </>
  );
};

export default Cryptocurrencies;
