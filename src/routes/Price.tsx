import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
interface PriceProps {
  coinId: string;
}
function Price({ coinId }: PriceProps) {
  return <h1></h1>;
}

export default Price;
