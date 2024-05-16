import * as graphql from "@nestjs/graphql";
import { RaydiumPriceResolverBase } from "./base/raydiumPrice.resolver.base";
import { RaydiumPrice } from "./base/RaydiumPrice";
import { RaydiumPriceService } from "./raydiumPrice.service";

@graphql.Resolver(() => RaydiumPrice)
export class RaydiumPriceResolver extends RaydiumPriceResolverBase {
  constructor(protected readonly service: RaydiumPriceService) {
    super(service);
  }
}
