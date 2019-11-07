import { Controller, Post, Body, Get } from '@nestjs/common';
import { ConsoleDtoRequest } from '../dto/console.request';
import { ConsoleService } from '../services/console.service';

@Controller('console')
export class ConsoleController {
  constructor(private readonly consoleService: ConsoleService) {}
  @Get('init')
  init() {
    return this.consoleService.init();
  }

  @Post('sendComand')
  async sendComand(@Body() consolDtoRequest: ConsoleDtoRequest) {}
}
