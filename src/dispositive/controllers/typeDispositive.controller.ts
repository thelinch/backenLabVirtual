import { Controller, Get } from '@nestjs/common';
import { TypeDispositiveService } from '../services/typeDispositive.service';

@Controller('typeDispositive')
export class TypeDispositiveController {
  constructor(
    private readonly typeDispositiveService: TypeDispositiveService,
  ) {}

  @Get('all')
  async get() {
    return await this.typeDispositiveService.get();
  }
}
