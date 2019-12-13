import { Dispositive } from "./Dispositive";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Maestro } from "./Maestro";

@Entity()
export class MaestroDispositive {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  value!: string;
  @ManyToOne(type => Dispositive, dispositive => dispositive.maestroDispositive)
  dispositive!: Dispositive;
  @ManyToOne(type => Maestro, maestro => maestro.maestroDispositive)
  maestro!: Maestro;
}
