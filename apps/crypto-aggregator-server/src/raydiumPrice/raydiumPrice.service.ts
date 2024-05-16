import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RaydiumPriceServiceBase } from "./base/raydiumPrice.service.base";

@Injectable()
export class RaydiumPriceService extends RaydiumPriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
