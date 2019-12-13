import { Controller, Post, Body, Get } from '@nestjs/common';
import { ConsoleDtoRequest } from '../dto/console.request';
import { ConsoleService } from '../services/console.service';
import { Dispositive } from '../../models/Dispositive';

@Controller('console')
export class ConsoleController {
  constructor(private readonly consoleService: ConsoleService) {}

  @Post('sendComand')
  async sendComand(@Body() consolDtoRequest: ConsoleDtoRequest) {}
  @Post('init')
  async init(@Body() dispositive: Dispositive) {}
}
