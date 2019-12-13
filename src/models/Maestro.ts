import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany
} from "typeorm";
import { MaestroDispositive } from "./Maestro_dispositive";
import { MaestroEnum } from "./enum/Mestro.enum";

@Entity()
export class Maestro {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: "enum", enum: MaestroEnum })
  name!: MaestroEnum;
  @Column()
  status: boolean = true;
  @OneToMany(
    type => MaestroDispositive,
    maestroDispositive => maestroDispositive.maestro
  )
  maestroDispositive!: MaestroDispositive[];
  @Column({ type: "date" })
  created_at!: Date;
}
