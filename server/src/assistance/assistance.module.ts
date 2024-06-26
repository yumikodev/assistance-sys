import { Module } from "@nestjs/common";
import { AssistanceService } from "./assistance.service";
import { AssistanceController } from "./assistance.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [AssistanceController],
  providers: [AssistanceService],
})
export class AssistanceModule {}
