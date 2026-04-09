import { Garage } from 'src/garages/garage.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('malfunctions')
export class Malfunction {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  price: string;
  @ManyToMany((type) => Garage, (garage) => garage.malfunctions)
  @JoinTable({
    name: 'garage_malfunction',
    joinColumn: { name: 'malfunction_id' },
    inverseJoinColumn: { name: 'garage_id' },
  })
  garages: Garage[];
}