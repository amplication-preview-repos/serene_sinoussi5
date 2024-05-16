import { JupiterPriceWhereInput } from "./JupiterPriceWhereInput";
import { JupiterPriceOrderByInput } from "./JupiterPriceOrderByInput";

export type JupiterPriceFindManyArgs = {
  where?: JupiterPriceWhereInput;
  orderBy?: Array<JupiterPriceOrderByInput>;
  skip?: number;
  take?: number;
};
