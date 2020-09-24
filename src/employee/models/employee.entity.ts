import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
