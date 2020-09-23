import { Module, ValidationPipe } from '@nestjs/common';
import { EmployeeController } from './controllers/employee.controller';
import { EmployeeService } from './services/employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './models/employee.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeController],
  providers: [
      EmployeeService,
      {
        provide: APP_PIPE,
        useClass: ValidationPipe
      }
    ]
})
export class EmployeeModule {}
