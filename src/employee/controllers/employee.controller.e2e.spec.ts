import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { EmployeeModule } from '../employee.module';
import { EmployeeService } from '../services/employee.service';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from '../../config/config.service';
import { AppController } from '../../app.controller';
import { AppModule } from '../../app.module';
import { AppService } from '../../app.service';
import { Employee } from '../models/employee.entity';
import { EmployeeController } from './employee.controller';
import { APP_PIPE } from '@nestjs/core';
// import { APP_PIPE } from '@nestjs/core';
// import { Employee } from '../models/employee.entity';
// import { EmployeeController } from './employee.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';

describe('Cats', () => {
  let app: INestApplication;
  const employeeService = { findAll: () => ['test'] };

  beforeAll(async () => {
    try {
      const moduleRef = await Test.createTestingModule({
        imports: [
          EmployeeModule,
          TypeOrmModule.forFeature([Employee]),
          // AppModule,
          TypeOrmModule.forRoot(configService.getTypeOrmConfig())
        ],
        controllers:[
          // AppController
          EmployeeController
        ],
        providers: [
          // AppService
          EmployeeService,
          // {
          //   provide: APP_PIPE,
          //   useClass: ValidationPipe
          // }

        ]
      })
        .compile();

      app = moduleRef.createNestApplication();
      await app.init();
    } catch (error) {
      console.log('+++++++++++++', error);
    }
  });

  it(`/GET cats`, () => {
    return request(app.getHttpServer())
      .get('/employees')
      .expect(200)
      .expect({
        data: employeeService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

// describe('Employee', () => {
//   let app: INestApplication;

//   beforeAll(async () => {
//     const moduleRef = await Test.createTestingModule({
//       imports: [EmployeeModule, TypeOrmModule.forFeature([Employee])],
//       controllers: [EmployeeController],
//       providers: [
//         EmployeeService,
//         {
//           provide: APP_PIPE,
//           useClass: ValidationPipe,
//         },
//       ],
//     }).compile();

//     app = moduleRef.createNestApplication();
//     await app.init();
//   });
//   // describe('GetAll controller', () => {
//   fit('return all employee in the DB', () => {
//     return request(app.getHttpServer())
//       .get('/cats')
//       .expect(200)
//       .end((err, res) => {
//         console.log(err);
//         console.log(res);
//       });
//     // });
//   });
// });
