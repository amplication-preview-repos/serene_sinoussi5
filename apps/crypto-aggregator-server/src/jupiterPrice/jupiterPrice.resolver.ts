import * as graphql from "@nestjs/graphql";
import { JupiterPriceResolverBase } from "./base/jupiterPrice.resolver.base";
import { JupiterPrice } from "./base/JupiterPrice";
import { JupiterPriceService } from "./jupiterPrice.service";

@graphql.Resolver(() => JupiterPrice)
export class JupiterPriceResolver extends JupiterPriceResolverBase {
  constructor(protected readonly service: JupiterPriceService) {
    super(service);
  }
}
