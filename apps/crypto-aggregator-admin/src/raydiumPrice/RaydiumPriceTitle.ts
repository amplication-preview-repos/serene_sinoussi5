import { RaydiumPrice as TRaydiumPrice } from "../api/raydiumPrice/RaydiumPrice";

export const RAYDIUMPRICE_TITLE_FIELD = "asset";

export const RaydiumPriceTitle = (record: TRaydiumPrice): string => {
  return record.asset?.toString() || String(record.id);
};
