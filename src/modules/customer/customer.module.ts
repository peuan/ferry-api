import { Module } from '@nestjs/common';
import { CustomerRepository } from './repositories/customer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { CustomerController } from './controllers/customer.controller';
import { CustomerService } from './services/customer.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerRepository, CustomerService],
  exports: [],
  controllers: [CustomerController],
})
export class CustomerModule {}
