import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Dispositive } from './Dispositive';

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
