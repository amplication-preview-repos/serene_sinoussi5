import { OrcaPrice as TOrcaPrice } from "../api/orcaPrice/OrcaPrice";

export const ORCAPRICE_TITLE_FIELD = "asset";

export const OrcaPriceTitle = (record: TOrcaPrice): string => {
  return record.asset?.toString() || String(record.id);
};
