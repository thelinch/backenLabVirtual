import { Repository, EntityRepository } from 'typeorm';
import { Red } from '../../models/red.entity';
@EntityRepository(Red)
export class RedRepository extends Repository<Red> {}
