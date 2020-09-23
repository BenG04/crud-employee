import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../models/employee.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>) {}

  // TODO typage avec entity ou dto ou interface ?
  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  findOne(id: string): Promise<Employee> {
    return this.employeeRepository.findOne(id);
  }

  create(employee: CreateEmployeeDto): Promise<Employee> {
    return this.employeeRepository.save(employee);
  }

  update(id: string, employee: UpdateEmployeeDto): Promise<UpdateResult> {
    return this.employeeRepository.update(id, employee);
  }

  delete(id: string): Promise<DeleteResult> {
    return this.employeeRepository.delete(id);
  }
}
