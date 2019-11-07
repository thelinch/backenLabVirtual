import { Dispositive } from './../../dispositive/entity/Dispositive';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Red {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @OneToMany(type => Dispositive, dispositive => dispositive.red)
  dispositives: Dispositive[];

  @Column({ default: true })
  status: boolean;
}
