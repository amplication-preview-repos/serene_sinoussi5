import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type OrcaPriceWhereInput = {
  asset?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
