import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { CardRepository } from './repositories/customer.repository';
import { CardService } from './services/card.service';
import { CardController } from './controllers/card.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [CardRepository, CardService],
  exports: [],
  controllers: [CardController],
})
export class CardModule {}
