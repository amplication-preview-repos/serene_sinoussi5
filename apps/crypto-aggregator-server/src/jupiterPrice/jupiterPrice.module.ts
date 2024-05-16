import { Module } from "@nestjs/common";
import { JupiterPriceModuleBase } from "./base/jupiterPrice.module.base";
import { JupiterPriceService } from "./jupiterPrice.service";
import { JupiterPriceController } from "./jupiterPrice.controller";
import { JupiterPriceResolver } from "./jupiterPrice.resolver";

@Module({
  imports: [JupiterPriceModuleBase],
  controllers: [JupiterPriceController],
  providers: [JupiterPriceService, JupiterPriceResolver],
  exports: [JupiterPriceService],
})
export class JupiterPriceModule {}
