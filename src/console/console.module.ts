import { ConsoleController } from './controllers/console.controller';
import { Module } from '@nestjs/common';
import { ConsoleService } from './services/console.service';

@Module({
  controllers: [ConsoleController],
  providers: [ConsoleService],
})
export class ConsoleModule {}
