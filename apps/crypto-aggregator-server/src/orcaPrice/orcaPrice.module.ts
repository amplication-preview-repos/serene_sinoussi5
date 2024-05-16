import { Module } from "@nestjs/common";
import { OrcaPriceModuleBase } from "./base/orcaPrice.module.base";
import { OrcaPriceService } from "./orcaPrice.service";
import { OrcaPriceController } from "./orcaPrice.controller";
import { OrcaPriceResolver } from "./orcaPrice.resolver";

@Module({
  imports: [OrcaPriceModuleBase],
  controllers: [OrcaPriceController],
  providers: [OrcaPriceService, OrcaPriceResolver],
  exports: [OrcaPriceService],
})
export class OrcaPriceModule {}
