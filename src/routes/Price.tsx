import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinHistory } from "../api";
const Overview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 200px;
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
function Price({ coinId }: PriceProps) {
  return (
    <Overview>
      <ul>
        <PriceBlock>1</PriceBlock>
        <PriceBlock>2</PriceBlock>
        <PriceBlock>3</PriceBlock>
        <PriceBlock>4</PriceBlock>
      </ul>
    </Overview>
  );
}

export default Price;
