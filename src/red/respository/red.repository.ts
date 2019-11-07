import { Repository, EntityRepository } from 'typeorm';
import { Red } from '../entity/red.entity';
@EntityRepository(Red)
export class RedRepository extends Repository<Red> {}
