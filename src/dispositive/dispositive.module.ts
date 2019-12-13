import { Module } from '@nestjs/common';
import { DispositiveController } from './controllers/dispositive.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DispositiveRespository } from './repository/dispositive.repository';
import { DispositiveService } from './services/dispositive.service';
import { MaestroController } from './controllers/maestro.controller';
import { TypeDispositiveService } from './services/typeDispositive.service';
import { TypeDispositiveController } from './controllers/typeDispositive.controller';
import { Dispositive } from '../models/Dispositive';
import { MaestroDispositive } from '../models/Maestro_dispositive';
import { Maestro } from '../models/Maestro';
import { TypeDispositive } from '../models/TypeDispositive';

@Module({
  controllers: [
    DispositiveController,
    MaestroController,
    TypeDispositiveController,
  ],
  imports: [
    TypeOrmModule.forFeature([
      Dispositive,
      MaestroDispositive,
      Maestro,
      TypeDispositive,
      DispositiveRespository,
    ]),
  ],
  providers: [DispositiveService, TypeDispositiveService],
})
export class DispositiveModule {}
