import { Red } from './../../red/entity/red.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TypeDispositive } from './TypeDispositive';
import { MaestroDispositive } from './Maestro_dispositive';

@Entity()
export class Dispositive {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ default: 'nuevo' })
  name!: string;
  @ManyToOne(
    type => TypeDispositive,
    typeDispositive => typeDispositive.dispositives,
    {
      cascade: true,
      nullable: false,
    },
  )
  typeDispositive!: TypeDispositive;
  @OneToMany(
    type => MaestroDispositive,
    maestroDispositive => maestroDispositive.dispositive,
    { cascade: true, nullable: false },
  )
  maestroDispositive!: MaestroDispositive[];
  @ManyToOne(type => Red, red => red.dispositives, {
    cascade: true,
    nullable: false,
  })
  red: Red;
  @Column()
  x: number;
  @Column()
  y: number;
  @Column({ default: true })
  status: boolean;
}
