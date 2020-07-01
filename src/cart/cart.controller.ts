import { Controller, Get, Post, Put,Delete, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('')
export class CartController {
  constructor(private cartService: CartService) {}

  @Get('/cart')
  getCart(){
    return this.cartService.getValuesFromCart('murugesan@gmail.com');
  }

  @Post('/cart')
  addCart():string{
    return "The cart is successfully added";
  }

  @Put('/cart')
  putCart(@Body() body):Promise<string>{
    return this.cartService.putValuesInCart(body);
  }

  @Delete('/cart/:id')
  deleteCart(@Param('id') id  :number){
    return this.cartService.deleteValuesFromCart(id);
  }

}
