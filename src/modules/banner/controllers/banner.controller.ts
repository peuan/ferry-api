import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BannerService } from '../services/banner.service';
import { CreateBannerDto } from '../dtos/create-banner.dto';

@Controller('banners')
@ApiTags('banner')
export class BannerController {
  constructor(private bannerService: BannerService) {}

  @Post()
  createBanner(@Body() createBannerDto: CreateBannerDto) {
    return this.bannerService.createBanner(createBannerDto);
  }
}
