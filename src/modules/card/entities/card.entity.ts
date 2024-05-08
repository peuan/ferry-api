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

  @Column({
    type: 'text',
  })
  desc: string;

  @Column()
  buttonName: string;

  @Column({
    default: true,
  })
  isClickable: boolean;

  @Column()
  url: string;

  @Column()
  type: CARD_TYPE;

  @Column()
  price: number;
}
