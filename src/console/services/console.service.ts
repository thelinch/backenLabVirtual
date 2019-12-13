import { Injectable } from '@nestjs/common';
import { ConsoleDtoRequest } from '../dto/console.request';
import { execSync } from 'child_process';
import { ConsoleDtoResponse } from '../dto/console.response';
import { Dispositive } from 'src/models/Dispositive';
@Injectable()
export class ConsoleService {
  constructor() {}
  init(dispositive:Dispositive) {
    try {
      let respuesta = execSync(''+dispositive.maestroDispositive);
      return new ConsoleDtoResponse({
        exito: true,
        text: respuesta.toString(),
        error: null,
      });
    } catch (error) {
      console.log('error ', error);
    }
  }
}
