import * as graphql from "@nestjs/graphql";
import { PriceResponse } from "../priceAggregation/PriceResponse";
import { PriceAggregationService } from "./priceaggregation.service";

export class PriceAggregationResolver {
  constructor(protected readonly service: PriceAggregationService) {}

  @graphql.Query(() => PriceResponse)
  async AggregatePrice(
    @graphql.Args()
    args: string
  ): Promise<PriceResponse> {
    return this.service.AggregatePrice(args);
  }
}
