import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Maestro } from '../../models/Maestro';
import { Repository } from 'typeorm';

@Controller('maestro')
export class MaestroController {
  constructor(
    @InjectRepository(Maestro)
    private readonly maestroRepository: Repository<Maestro>,
  ) {}
  @Get('all')
  all() {
    return this.maestroRepository.find({ where: { status: true } });
  }
}
