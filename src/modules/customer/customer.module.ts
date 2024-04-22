import { Module } from '@nestjs/common';
import { CustomerRepository } from './repositories/customer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerRepository],
  exports: [],
})
export class CustomerModule {}
