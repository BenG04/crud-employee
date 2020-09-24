import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.entity';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FindOneDto } from '../dto/find-one.dto';
import { UpdateOneDto } from '../dto/update-one.dto';
import { DeleteOneDto } from '../dto/delete-one.dto';

@Controller('employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {
  }

  // TODO typage avec entity ou dto ou interface ?
  @Get()
  public getAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  public get(@Param() params: FindOneDto): Promise<Employee> {
    return this.employeeService.findOne(params.id);
  }

  @Post()
  public create(@Body() employee: CreateEmployeeDto ): Promise<Employee> {
    return this.employeeService.create(employee);
  }

  @Put(':id')
  public update(@Param() params: UpdateOneDto, @Body() employee: UpdateEmployeeDto ): Promise<UpdateResult> {
    return this.employeeService.update(params.id, employee);
  }

  @Delete(':id')
  public delete(@Param() params: DeleteOneDto): Promise<DeleteResult> {
    return this.employeeService.delete(params.id);
  }

}
