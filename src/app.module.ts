import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()), EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
