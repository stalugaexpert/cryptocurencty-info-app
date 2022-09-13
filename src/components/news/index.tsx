import { Avatar, Card, Col, Row, Select, Typography } from 'antd';
import moment from 'moment';
import { useState } from 'react';

import { useGetCryptosQuery } from '../../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../../services/cryptoNews';

const { Text, Title } = Typography;
const { Option } = Select;

const placeholderImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

type ComponentAttributes = {
  simplified: boolean;
}

const News = ({ simplified }: ComponentAttributes): JSX.Element => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return <p>Loading...</p>;

  return (
    <Row gutter={ [24, 24] }>
      { !simplified && (
        <Col span={ 24 }>
          <Select
            className="select-news"
            filterOption={ (input: string, option: any): any => option?.children?.toLowerCase().indexOf(input.toLowerCase()) >= 0 }
            onChange={ (value): void => setNewsCategory(value) }
            placeholder="Select a Crypto"
            showSearch
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            { data?.data?.coins.map((coin: any) => (
              <Option
                key={ coin.uuid }
                value={ coin.name }
              >
                { coin.name }
              </Option>
            )) }
          </Select>
        </Col>
      ) }
      { cryptoNews.value.map((news: any, i: number) => (
        <Col
          key={ i }
          lg={ 8 }
          sm={ 12 }
          xs={ 24 }
        >
          <Card
            className="news-card"
            hoverable
          >
            <a
              href={ news.url }
              rel="noreferrer"
              target="_blank"
            >
              <div className="news-image-container">
                <Title
                  className="news-title"
                  level={ 4 }
                >
                  { news.name }
                </Title>
                <img
                  alt={ news }
                  src={ news?.image?.thumbnail?.contentUrl || placeholderImage }
                  style={ { maxWidth: '200px', maxHeight: '100px', borderRadius: '50%' } }
                />
              </div>
              <p>{ news.description > 100 ? `${news.description.substring(0, 100)}...` : news.description }</p>
              <div className="provider-container">
                <div>
                  <Avatar
                    alt="news"
                    src={ news.provider[0]?.image?.thumbnail?.contentUrl || placeholderImage }
                  />
                  <Text className="provider-name">{ news.provider[0]?.name }</Text>
                </div>
                <Text>
                  { moment(news.datePublished).startOf('s')
                    .fromNow() }
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      )) }

    </Row>
  );
};

export default News;
