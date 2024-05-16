import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { JupiterPriceService } from "./jupiterPrice.service";
import { JupiterPriceControllerBase } from "./base/jupiterPrice.controller.base";

@swagger.ApiTags("jupiterPrices")
@common.Controller("jupiterPrices")
export class JupiterPriceController extends JupiterPriceControllerBase {
  constructor(protected readonly service: JupiterPriceService) {
    super(service);
  }
}
