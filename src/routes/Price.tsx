import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinHistory, fetchCoinTickers } from "../api";
const Overview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  padding: 35px;
  justify-content: space-between;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;
const PriceBlock = styled.li`
  padding: 5px;
  color: #d7d7d7;
`;
const PriceTitle = styled(PriceBlock)`
  font-size: 1.2em;
  font-weight: 1.2;
  color: white;
`;

const PriceChange = styled.span<{ isPositive: boolean }>`
  color: ${(props) => (props.isPositive ? "green" : "red")};
`;
interface PriceProps {
  coinId: string;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IPriceData>(
    ["price", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 10000,
    }
  );
  const price24h = data?.quotes.USD.percent_change_24h;
  const price7d = data?.quotes.USD.percent_change_7d;
  return (
    <Overview>
      <ul>
        <PriceTitle>
          Current Price: $ {data?.quotes.USD.price.toFixed(2)}
        </PriceTitle>
        <PriceBlock>
          24h% :
          <PriceChange isPositive={price24h ? price24h > 0 : false}>
            {price24h
              ? price24h > 0
                ? " ▲ " + Math.abs(price24h)
                : " ▼ " + Math.abs(price24h)
              : ""}
            %
          </PriceChange>
        </PriceBlock>
        <PriceBlock>
          7d% :
          <PriceChange isPositive={price7d ? price7d > 0 : false}>
            {price7d
              ? price7d > 0
                ? " ▲ " + Math.abs(price7d)
                : " ▼ " + Math.abs(price7d)
              : ""}
            %
          </PriceChange>
        </PriceBlock>
        <PriceBlock>Last updated at {data?.last_updated}</PriceBlock>
      </ul>
    </Overview>
  );
}

export default Price;
