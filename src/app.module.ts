/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Parent } from './parent/parent.entity';
import { ParentsModules } from './parent/parents.modules';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'HavisSM',
      entities: [Parent],
      autoLoadEntities: true,
    }),
    ParentsModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(public connection: Connection) {}
}
