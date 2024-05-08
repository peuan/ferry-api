import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CARD_TYPE } from '../enums/card.enum';

@Entity('card')
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subTitle: string;

  @Column()
  mediaId: string;

  @Column()
  desc: string;

  @Column()
  buttonName: string;

  @Column({
    default: false,
  })
  isClickable: boolean;

  @Column()
  url: string;

  @Column()
  type: CARD_TYPE;

  @Column()
  price: number;
}
