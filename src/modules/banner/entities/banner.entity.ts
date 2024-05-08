import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Url } from '../enums/url.enum';

@Entity('banner')
export class Banner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subTitle?: string;
  @Column()
  desc: string;
  @Column()
  buttonName: string;
  @Column()
  buttonAction: string;
  @Column()
  isClickable: boolean;
  @Column({
    default: Url.BOOKING,
  })
  url: Url;
}
