import { JupiterPrice as TJupiterPrice } from "../api/jupiterPrice/JupiterPrice";

export const JUPITERPRICE_TITLE_FIELD = "asset";

export const JupiterPriceTitle = (record: TJupiterPrice): string => {
  return record.asset?.toString() || String(record.id);
};
