import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrcaPriceService } from "./orcaPrice.service";
import { OrcaPriceControllerBase } from "./base/orcaPrice.controller.base";

@swagger.ApiTags("orcaPrices")
@common.Controller("orcaPrices")
export class OrcaPriceController extends OrcaPriceControllerBase {
  constructor(protected readonly service: OrcaPriceService) {
    super(service);
  }
}
