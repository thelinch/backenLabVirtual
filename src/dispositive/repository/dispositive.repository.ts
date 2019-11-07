import { Repository, EntityRepository } from 'typeorm';
import { Dispositive } from '../entity/Dispositive';
@EntityRepository(Dispositive)
export class DispositiveRespository extends Repository<Dispositive> {}
