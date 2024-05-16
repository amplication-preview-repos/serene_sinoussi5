import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RaydiumPriceService } from "./raydiumPrice.service";
import { RaydiumPriceControllerBase } from "./base/raydiumPrice.controller.base";

@swagger.ApiTags("raydiumPrices")
@common.Controller("raydiumPrices")
export class RaydiumPriceController extends RaydiumPriceControllerBase {
  constructor(protected readonly service: RaydiumPriceService) {
    super(service);
  }
}
