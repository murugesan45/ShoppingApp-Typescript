import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AdminProductsService } from './products.service';
import { ProductModel } from './model/products.model';
import { pathToFileURL } from 'url';

@Controller('/admin')
export class AdminProductsController {
  constructor(private adminProductsService: AdminProductsService) {}

  @Post('/products')
  addProducts(@Body() product ){
   return this.adminProductsService.save(product);
  }
  
  @Put('/products')
  editProducts(@Body() product){
    return this.adminProductsService.update(product);
}
  @Get('/products/:id')
  getProducts(@Param('id') id:string){
    return this.adminProductsService.get(id);
  }
  @Delete('/products/:id') 
  deleteProducts(@Param('id') id:number){
     return this.adminProductsService.delete(id);
  }

}
