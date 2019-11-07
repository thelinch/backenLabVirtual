import { Injectable } from '@nestjs/common';
import { ConsoleDtoRequest } from '../dto/console.request';
import { execSync } from 'child_process';
import { ConsoleDtoResponse } from '../dto/console.response';
@Injectable()
export class ConsoleService {
  constructor() {}
  init() {
    try {
      let respuesta = execSync('mkdir esUNaPrueba');
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
