import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CARD_TYPE } from '../enums/card';

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

  @Column()
  buttonAction: string;

  @Column({
    default: false,
  })
  isClickable: boolean;

  @Column()
  url: string;

  @Column({
    default: CARD_TYPE.SIMPLE,
  })
  type: CARD_TYPE;

  @Column()
  price: number;
}
