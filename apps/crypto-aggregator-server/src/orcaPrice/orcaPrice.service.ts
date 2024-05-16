import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrcaPriceServiceBase } from "./base/orcaPrice.service.base";

@Injectable()
export class OrcaPriceService extends OrcaPriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
