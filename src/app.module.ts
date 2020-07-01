import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './Products/products.module';
import { AdminProductsModule } from './admin/admin-products/products.module';
import { CartModule} from './cart/cart.module';

@Module({
  imports: [ProductsModule,AdminProductsModule,CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
