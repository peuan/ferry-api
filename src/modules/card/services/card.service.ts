import { Injectable } from '@nestjs/common';
import { CardRepository } from '../repositories/customer.repository';
import { CreateCardDto } from '../dtos/create-card.dto';

@Injectable()
export class CardService {
  constructor(private cardRepository: CardRepository) {}

  async createCard(createCardDto: CreateCardDto) {
    const newCard = this.cardRepository.create();
    newCard.title = createCardDto.title;
    newCard.subTitle = createCardDto.subTitle;
    newCard.desc = createCardDto.desc;
    newCard.buttonName = createCardDto.buttonName;
    newCard.isClickable = createCardDto.isClickable;
    newCard.url = createCardDto.url;
    newCard.type = createCardDto.type;
    newCard.price = createCardDto.price;

    return this.cardRepository.save(newCard);
  }
}
