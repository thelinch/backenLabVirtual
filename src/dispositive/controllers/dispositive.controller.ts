import { Controller, Get, Post, Body } from '@nestjs/common';
import { Dispositive } from '../../models/Dispositive';
import { DispositiveService } from '../services/dispositive.service';

@Controller('dispositive')
export class DispositiveController {
  constructor(private readonly service: DispositiveService) {}
  @Get('all')
  all() {
    return this.service.all();
  }
  @Post('create')
  async create(@Body() dispositive: Dispositive) {
    return await this.service.create(dispositive);
  }
}
