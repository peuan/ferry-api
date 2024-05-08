import { Module } from '@nestjs/common';
import { BannerRepository } from './repositories/banner.repository';
import { Banner } from './entities/banner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerService } from './services/banner.service';
import { BannerController } from './controllers/banner.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Banner])],
  providers: [BannerRepository, BannerService],
  exports: [],
  controllers: [BannerController],
})
export class BannerModule {}
