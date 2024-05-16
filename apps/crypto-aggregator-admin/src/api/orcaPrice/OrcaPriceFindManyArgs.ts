import { OrcaPriceWhereInput } from "./OrcaPriceWhereInput";
import { OrcaPriceOrderByInput } from "./OrcaPriceOrderByInput";

export type OrcaPriceFindManyArgs = {
  where?: OrcaPriceWhereInput;
  orderBy?: Array<OrcaPriceOrderByInput>;
  skip?: number;
  take?: number;
};
