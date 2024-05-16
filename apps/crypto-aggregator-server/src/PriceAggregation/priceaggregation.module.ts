import { Module } from "@nestjs/common";
import { PriceAggregationService } from "./priceaggregation.service";
import { PriceAggregationController } from "./priceaggregation.controller";
import { PriceAggregationResolver } from "./priceaggregation.resolver";

@Module({
  controllers: [PriceAggregationController],
  providers: [PriceAggregationService, PriceAggregationResolver],
  exports: [PriceAggregationService],
})
export class PriceAggregationModule {}
