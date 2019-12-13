import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DispositiveModule } from './dispositive/dispositive.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppGateway } from './app.gateway';
import { RedModule } from './red/red.module';
import { Red } from './models/red.entity';
import { ConsoleModule } from './console/console.module';
import { Dispositive } from './models/Dispositive';
import { MaestroDispositive } from './models/Maestro_dispositive';
import { Maestro } from './models/Maestro';
import { TypeDispositive } from './models/TypeDispositive';

@Module({
  imports: [
    DispositiveModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'lab',
      synchronize: true,
      entities: [
        Dispositive,
        MaestroDispositive,
        Maestro,
        TypeDispositive,
        Red,
      ],
    }),
    RedModule,
    ConsoleModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
