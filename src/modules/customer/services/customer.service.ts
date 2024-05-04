import { BadRequestException, Injectable } from '@nestjs/common';
import { CustomerRepository } from '../repositories/customer.repository';
import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { CustomersFilterDto } from '../dtos/customers-filter.dto';

@Injectable()
export class CustomerService {
  constructor(private customerRepository: CustomerRepository) {}

  getCustomers(customersFilterDto: CustomersFilterDto) {
    return this.customerRepository.find({
      where: {
        status: customersFilterDto.status,
      },
    });
  }

  async createCustomer(createCustomerDto: CreateCustomerDto) {
    const existingCustomer = await this.customerRepository.findOneBy({
      name: createCustomerDto.name,
    });

    if (existingCustomer) {
      throw new BadRequestException('Customer name is already exist eiei');
    }

    const newCustomer = this.customerRepository.create();
    newCustomer.name = createCustomerDto.name;

    return this.customerRepository.save(newCustomer);
  }
}
