import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { CardRepository } from './repositories/customer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [CardRepository],
  exports: [],
})
export class CardModule {}
