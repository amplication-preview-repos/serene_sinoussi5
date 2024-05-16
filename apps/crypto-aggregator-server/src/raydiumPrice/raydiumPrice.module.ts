import { Module } from "@nestjs/common";
import { RaydiumPriceModuleBase } from "./base/raydiumPrice.module.base";
import { RaydiumPriceService } from "./raydiumPrice.service";
import { RaydiumPriceController } from "./raydiumPrice.controller";
import { RaydiumPriceResolver } from "./raydiumPrice.resolver";

@Module({
  imports: [RaydiumPriceModuleBase],
  controllers: [RaydiumPriceController],
  providers: [RaydiumPriceService, RaydiumPriceResolver],
  exports: [RaydiumPriceService],
})
export class RaydiumPriceModule {}
