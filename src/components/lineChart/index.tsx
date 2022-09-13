import { Col, Row, Typography } from 'antd';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }: any): JSX.Element => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp * 1000).toLocaleDateString());
  }

  // console.log(coinTimestamp);

  const data = {
    labels: coinTimestamp.reverse(),
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice.reverse(),
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  };

  return (
    <>
      <Row className="chart-header">
        <Title
          className="chart-title"
          level={ 2 }
        >
          { coinName }
          Price Chart
        </Title>
        <Col className="price-container">
          <Title
            className="price-change"
            level={ 5 }
          >
            { coinHistory?.data?.change }
            %
          </Title>
          <Title
            className="current-price"
            level={ 5 }
          >
            Current
            { ' ' }
            { coinName }
            { ' ' }
            Price: $
            { ' ' }
            { currentPrice }
          </Title>
        </Col>
      </Row>
      <Line
        data={ data }
        // options={ options }
      />
    </>
  );
};

export default LineChart;
