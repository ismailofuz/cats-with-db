import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize"
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '3812',
      database: 'cats',
      autoLoadModels: true,
      synchronize: true
    }),
    CatsModule
  ],
})
export class AppModule { }