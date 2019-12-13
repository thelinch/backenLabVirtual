import { Repository, EntityRepository } from 'typeorm';
import { Dispositive } from '../../models/Dispositive';
@EntityRepository(Dispositive)
export class DispositiveRespository extends Repository<Dispositive> {}
