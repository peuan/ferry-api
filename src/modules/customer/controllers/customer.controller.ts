import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from '../services/customer.service';
import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { CustomersFilterDto } from '../dtos/customers-filter.dto';

@Controller('customers')
@ApiTags('customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  getCustomers(@Query() customersFilterDto: CustomersFilterDto) {
    return this.customerService.getCustomers(customersFilterDto);
  }

  @Get(':id')
  getCustomerById(@Param('id') customerId: string) {
    return customerId;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomer(createCustomerDto);
  }
}
