import { ApiHideProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerStatus } from '../enums/customer-status.enum';

@Entity('customer')
export class Customer {
  @Exclude()
  @ApiHideProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    default: CustomerStatus.ACTIVE,
  })
  status: CustomerStatus;
}
