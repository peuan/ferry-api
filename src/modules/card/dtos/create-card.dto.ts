import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, Min } from 'class-validator';
import { CARD_TYPE } from '../enums/card.enum';

export class CreateCardDto {
  @IsNotEmpty()
  @ApiProperty({
    example: 'Super Special Price!',
  })
  title: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'Only last for 2 hours!!',
  })
  subTitle: string;

  @IsOptional()
  @ApiProperty({
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupt',
  })
  desc: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'See the deal',
  })
  buttonName: string;

  @IsNotEmpty()
  @ApiProperty({
    example: true,
  })
  isClickable: boolean;

  @IsNotEmpty()
  @ApiProperty({
    example: 'https://thanachon.me',
  })
  url: string;

  @IsEnum(CARD_TYPE)
  @IsNotEmpty()
  type: CARD_TYPE;

  @IsOptional()
  @Min(0)
  @ApiProperty({
    example: 1000,
  })
  price: number;
}
