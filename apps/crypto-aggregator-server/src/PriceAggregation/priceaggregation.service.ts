import { Injectable } from "@nestjs/common";
import { PriceResponse } from "../priceAggregation/PriceResponse";

@Injectable()
export class PriceAggregationService {
  constructor() {}
  async AggregatePrice(args: string): Promise<PriceResponse> {
    throw new Error("Not implemented");
  }
}
