import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RedService } from '../service/red.service';
import { Red } from '../../models/red.entity';

@Controller('red')
export class RedControllerController {
  constructor(private readonly redService: RedService) {}
  @Get('all')
  async all() {
    return await this.redService.all();
  }
  @Post('save')
  async save(@Body() red: Red) {
    return await this.redService.save(red);
  }
  @Get(':id')
  async getById(@Param() id: number) {
    return await this.redService.getFindById(id);
  }
  @Get(':id/dispositives')
  async getDispositiveByRedId(@Param() id: number) {
    return await this.redService.getDispositiveFindRed(id);
  }
}
