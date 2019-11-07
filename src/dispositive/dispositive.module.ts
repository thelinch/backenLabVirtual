import { Module } from '@nestjs/common';
import { DispositiveController } from './controllers/dispositive.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dispositive } from './entity/Dispositive';
import { MaestroDispositive } from './entity/Maestro_dispositive';
import { Maestro } from './entity/Maestro';
import { TypeDispositive } from './entity/TypeDispositive';
import { DispositiveRespository } from './repository/dispositive.repository';
import { DispositiveService } from './services/dispositive.service';
import { MaestroController } from './controllers/maestro.controller';
import { TypeDispositiveService } from './services/typeDispositive.service';
import { TypeDispositiveController } from './controllers/typeDispositive.controller';

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
