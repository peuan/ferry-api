import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CustomerModule } from './modules/customer/customer.module';

@Module({
  imports: [CoreModule, CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
