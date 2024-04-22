import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSource from './database/data-source';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRoot({
      ...dataSource.options,
      autoLoadEntities: true,
    }),
  ],
  exports: [TypeOrmModule],
})
export class CoreModule {}
