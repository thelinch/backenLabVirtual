import { Module } from '@nestjs/common';
import { RedControllerController } from './controllers/red-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Red } from './entity/red.entity';
import { RedService } from './service/red.service';

@Module({
  controllers: [RedControllerController],
  imports: [TypeOrmModule.forFeature([Red])],
  providers: [RedService],
})
export class RedModule {}
