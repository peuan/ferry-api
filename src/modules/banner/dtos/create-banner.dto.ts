import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { Url } from '../enums/url.enum';

export class CreateBannerDto {
  @IsNotEmpty()
  @ApiProperty({
    example: 'home banner',
  })
  title: string;

  @IsOptional()
  @ApiProperty({
    example: 'banner subtitle',
  })
  subTitle?: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'banner description',
  })
  desc: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'button name',
  })
  buttonName: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'button action',
  })
  isClickable: boolean;

  @IsNotEmpty()
  @IsEnum(Url)
  @ApiProperty({
    example: Url.BOOKING,
  })
  url: Url;
}
