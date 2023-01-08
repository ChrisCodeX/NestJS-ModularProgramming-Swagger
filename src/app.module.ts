import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { async } from 'rxjs';

const API_KEY_DEV = 'dev_123';
const API_KEY_PROD = 'prod_321';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'dev' ? API_KEY_DEV : API_KEY_PROD,
    },
  ],
})
export class AppModule {}
