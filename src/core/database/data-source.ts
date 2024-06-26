import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { Customer } from 'src/modules/customer/entities/customer.entity';
import { Card } from 'src/modules/card/entities/card.entity';
import { Banner } from 'src/modules/banner/entities/banner.entity';
import { Media } from 'src/modules/media/entities/media.entity';

config();

const configService = new ConfigService();

const dataSource = new DataSource({
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [Customer, Card, Banner, Media],
  synchronize: true,
  migrationsRun: true,
  migrations: [],
});

export default dataSource;
