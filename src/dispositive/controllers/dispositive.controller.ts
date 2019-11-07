import { Controller, Get, Post, Body } from '@nestjs/common';
import { Dispositive } from '../entity/Dispositive';
import { DispositiveService } from '../services/dispositive.service';

@Controller('dispositive')
export class DispositiveController {
  constructor(private readonly service: DispositiveService) {}
  @Get('all')
  all() {
    return this.service.all();
  }
  @Post('create')
  create(@Body() dispositive: Dispositive) {
    return this.service.create(dispositive);
  }
}
