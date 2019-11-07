import { TypeDispositiveDtoResponse } from './../dto/typeDispositive.dto.response';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeDispositive } from '../entity/TypeDispositive';
import { Repository } from 'typeorm';
import { typeDispositiveEnum } from '../enum/typeDispositive.enum';

@Injectable()
export class TypeDispositiveService {
  constructor(
    @InjectRepository(TypeDispositive)
    private readonly repository: Repository<TypeDispositive>,
  ) {}
  async getByType(type: typeDispositiveEnum) {
    return await this.repository.findOne({ where: { name: type } });
  }
  async get() {
    let list = await this.repository.find({
      where: { status: true },
      relations: ['dispositives'],
    });
    let listaTypeDispositiveDto: TypeDispositiveDtoResponse[] = list.map(e => {
      let typeDispositiveDtoResponseEntity = new TypeDispositiveDtoResponse(
        e.id,
        e.name,
        e.url,
        e.status,
        e.dispositives.filter(d => d.status).length,
      );
      return typeDispositiveDtoResponseEntity;
    });
    /*  let listTypeDispositiveResponse: TypeDispositiveDtoResponse[] = await this.repository
      .createQueryBuilder('typeDispositive')
      .select('typeDispositive.*')
      .addSelect('CAST(COUNT(dispositive.id) as SIGNED)', 'totalDispositive')
      .leftJoin('typeDispositive.dispositives', 'dispositive')
      .where('dispositive.status=true')
      .andWhere('typeDispositive.status=true')
      .groupBy('typeDispositive.id')
      .addGroupBy('typeDispositive.name')
      .addGroupBy('typeDispositive.status')
      .addGroupBy('typeDispositive.url')
      .getRawMany();*/
    return listaTypeDispositiveDto;
  }
}
