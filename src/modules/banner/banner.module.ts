import { Module } from '@nestjs/common';
import { BannerRepository } from './repositories/banner.repository';
import { Banner } from './entities/banner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Banner])],
  providers: [BannerRepository],
  exports: [],
  controllers: [],
})
export class BannerModule {}
