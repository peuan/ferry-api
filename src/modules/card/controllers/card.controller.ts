import { CardService } from './../services/card.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCardDto } from '../dtos/create-card.dto';

@Controller('cards')
@ApiTags('cards')
export class CardController {
  constructor(private cardService: CardService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createCard(@Body() createCardDto: CreateCardDto) {
    return this.cardService.createCard(createCardDto);
  }
}
