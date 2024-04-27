import { IsEnum, IsOptional } from 'class-validator';
import { CustomerStatus } from '../enums/customer-status.enum';

export class CustomersFilterDto {
  @IsEnum(CustomerStatus)
  @IsOptional()
  status?: CustomerStatus;
}
