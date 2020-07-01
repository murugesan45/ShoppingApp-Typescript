import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/categories/:id')
  getFruits(@Param('id') id :string){
     return this.productsService.getProduct(id);
  }
}
