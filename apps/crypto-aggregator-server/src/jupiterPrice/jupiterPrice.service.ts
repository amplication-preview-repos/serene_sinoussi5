import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JupiterPriceServiceBase } from "./base/jupiterPrice.service.base";

@Injectable()
export class JupiterPriceService extends JupiterPriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
