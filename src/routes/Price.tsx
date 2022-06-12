import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinHistory, fetchCoinTickers } from "../api";
const Overview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 200px;
  padding: 40px;
  justify-content: space-between;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;
const PriceBlock = styled.li`
  padding: 5px;
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
  return (
    <Overview>
      <ul>
        <PriceBlock>${data?.quotes.USD.price.toFixed(2)}</PriceBlock>
        <PriceBlock>
          Change over 1h:{data?.quotes.USD.percent_change_1h}%
        </PriceBlock>
        <PriceBlock>
          Change over 24h:{data?.quotes.USD.percent_change_24h}%
        </PriceBlock>
        <PriceBlock>Last updated at {data?.last_updated}</PriceBlock>
      </ul>
    </Overview>
  );
}

export default Price;
