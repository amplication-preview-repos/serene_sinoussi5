import * as graphql from "@nestjs/graphql";
import { OrcaPriceResolverBase } from "./base/orcaPrice.resolver.base";
import { OrcaPrice } from "./base/OrcaPrice";
import { OrcaPriceService } from "./orcaPrice.service";

@graphql.Resolver(() => OrcaPrice)
export class OrcaPriceResolver extends OrcaPriceResolverBase {
  constructor(protected readonly service: OrcaPriceService) {
    super(service);
  }
}
