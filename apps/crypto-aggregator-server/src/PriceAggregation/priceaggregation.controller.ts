import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PriceAggregationService } from "./priceaggregation.service";
import { PriceResponse } from "../priceAggregation/PriceResponse";

@swagger.ApiTags("priceAggregations")
@common.Controller("priceAggregations")
export class PriceAggregationController {
  constructor(protected readonly service: PriceAggregationService) {}

  @common.Get("/aggregate-price")
  @swagger.ApiOkResponse({
    type: PriceResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AggregatePrice(
    @common.Body()
    body: string
  ): Promise<PriceResponse> {
        return this.service.AggregatePrice(body);
      }
}
