import { Injectable } from '@nestjs/common';
import { CreateBannerDto } from '../dtos/create-banner.dto';
import { BannerRepository } from '../repositories/banner.repository';

@Injectable()
export class BannerService {
  constructor(private bannerRepository: BannerRepository) {}

  async createBanner(createBannerDto: CreateBannerDto) {
    const newBanner = this.bannerRepository.create();
    newBanner.title = createBannerDto.title;
    newBanner.subTitle = createBannerDto.subTitle;
    newBanner.desc = createBannerDto.desc;
    newBanner.buttonName = createBannerDto.buttonName;
    newBanner.isClickable = createBannerDto.isClickable;
    newBanner.url = createBannerDto.url;

    return this.bannerRepository.save(newBanner);
  }
}
