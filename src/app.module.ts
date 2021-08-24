/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Parent } from './parent/parent.entity';
import { ParentsModules } from './parent/parents.modules';
import { Student } from './Student/student.entities';
import { AccManager } from './AccountManager/Acc_Man-entity';
import { Class } from './Class/class.entity';
import { Nurse } from './Nurse/nurse.entities';
import { Report } from './Report-Card/report.entities';
import { School } from './School/school.entities';
import { Security } from './Security/security.entity';
import { Teacher } from './Teacher/teacher.entity';
import { SecurityModule } from './Security/security.modules';
import { AccManModules } from './AccountManager/Acc_Man-Modules';
import { ClassModule } from './Class/class.modules';
import { NurseModules } from './Nurse/nurse.modules';
import { ReportModules } from './Report-Card/report.modules';
import { SchoolModule } from './School/school.modules';
import { StudentModule } from './Student/student.modules';
import { TeacherModule } from './Teacher/teacher.modules';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ROOT',
      database: 'havissm',
      entities: [
        Parent,
        Report,
        Student,
        Class,
        Security,
        Nurse,
        School,
        Teacher,
        AccManager,
      ],
      synchronize: true,
    }),
    SecurityModule,
    AccManModules,
    ClassModule,
    NurseModules,
    ParentsModules,
    ReportModules,
    SchoolModule,
    StudentModule,
    TeacherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(public connection: Connection) {}
}
