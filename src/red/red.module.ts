import { Module } from '@nestjs/common';
import { RedControllerController } from './controllers/red-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedService } from './service/red.service';
import { Red } from '../models/red.entity';

@Module({
  controllers: [RedControllerController],
  imports: [TypeOrmModule.forFeature([Red])],
  providers: [RedService],
})
export class RedModule {}
