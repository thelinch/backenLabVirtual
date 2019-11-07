import { Injectable } from '@nestjs/common';
import { DispositiveRespository } from '../repository/dispositive.repository';
import { TypeDispositiveService } from './typeDispositive.service';

@Injectable()
export class DispositiveService {
  constructor(
    private readonly dispositiveRepository: DispositiveRespository,
    private readonly typeDispositiveService: TypeDispositiveService,
  ) {}
  async all() {
    return await this.dispositiveRepository.find({
      where: { status: true },
      relations: [
        'maestroDispositive',
        'maestroDispositive.maestro',
        'typeDispositive',
      ],
    });
  }
  async create(dispositive: any) {
    dispositive.typeDispositive = await this.typeDispositiveService.getByType(
      dispositive.type,
    );
    return await this.dispositiveRepository.save(dispositive);
  }
}
