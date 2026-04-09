import { Garage } from 'src/garages/garage.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('makes')
export class Make {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column()
  country: string;
  @ManyToMany((type) => Garage, (garage) => garage.makes)
  @JoinTable({
    name: 'garage_make',
    joinColumn: { name: 'make_id' },
    inverseJoinColumn: { name: 'garage_id' },
  })
  garages: Garage[];
}
