import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Dispositive } from './Dispositive';
import { typeDispositiveEnum } from '../enum/typeDispositive.enum';

@Entity()
export class TypeDispositive {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: 'enum', enum: typeDispositiveEnum })
  name!: typeDispositiveEnum;
  @OneToMany(type => Dispositive, dispositive => dispositive.typeDispositive, {
    nullable: false,
  })
  dispositives!: Dispositive[];
  @Column({ nullable: false })
  url!: string;

  @Column({ nullable: false, default: true })
  status!: boolean;
}
