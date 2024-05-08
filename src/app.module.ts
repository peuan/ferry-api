import {
  ClassSerializerInterceptor,
  Module,
  ValidationPipe,
} from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CustomerModule } from './modules/customer/customer.module';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { CardModule } from './modules/card/card.module';
import { BannerModule } from './modules/banner/banner.module';
import { MediaModule } from './modules/media/media.module';

@Module({
  imports: [CoreModule, CustomerModule, BannerModule, CardModule, MediaModule],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ transform: true }),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
