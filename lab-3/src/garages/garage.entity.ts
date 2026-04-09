import { Make } from 'src/makes/make.entity';
import { Malfunction } from 'src/malfunctions/malfunction.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('garages')
export class Garage {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({})
  name: string;
  @Column()
  specialization: string;
  @ManyToMany((type) => Malfunction, (malfunction) => malfunction.garages)
  @JoinTable({
    name: 'garage_malfunction',
    joinColumn: { name: 'garage_id' },
    inverseJoinColumn: { name: 'malfunction_id' },
  })
  malfunctions: Malfunction[];
  @ManyToMany((type) => Make, (make) => make.garages)
  @JoinTable({
    name: 'garage_make',
    joinColumn: { name: 'garage_id' },
    inverseJoinColumn: { name: 'make_id' },
  })
  makes: Make[];
}
