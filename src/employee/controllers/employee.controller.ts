import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.entity';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';

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
  public get(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.findOne(id);
  }

  @Post()
  public create(@Body() employee: CreateEmployeeDto ): Promise<Employee> {
    return this.employeeService.create(employee);
  }

  @Put(':id')
  public update(@Param('id') id: string, @Body() employee: UpdateEmployeeDto ) {
    return this.employeeService.update(id, employee);
  }

  @Delete(':id')
  public delete(@Param('id') id: string) {
    return this.employeeService.delete(id);
  }

}
