import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from './entities/media.entity';
import { MediaRepository } from './repositories/media.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Media])],
  providers: [MediaRepository],
})
export class MediaModule {}
