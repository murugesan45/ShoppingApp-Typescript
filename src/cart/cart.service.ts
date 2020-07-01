import { Injectable } from '@nestjs/common';
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

@Injectable()
export class CartService {
   async getValuesFromCart(id:string) {
     return await dynamodb.get({
        TableName: 'Cart',
        Key:{
          'ID' : id
        }
      }).promise();
  }
 

   async putValuesInCart(product):Promise<string>{
     let id = product.id;
     let params = {
      TableName: 'Cart',
      Key: {
        'ID' : id
      },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: 'set #Products = list_append(#Products, :Products)',
      ExpressionAttributeNames: {
        '#Products': 'Products'
      },
      ExpressionAttributeValues: {
        ':Products'  : [{
          name     : product.name, 
          catagory : product.category, 
          price    : product.price,
          quantity : 1,
          imageUrl : product.imageUrl
        }],
      }

     }
    await dynamodb.update(params).promise();
    return "Successfully added in a cart";
     
   }
   
   async deleteValuesFromCart(id :number){
    return await dynamodb.update({
      TableName: 'Cart',
      Key:{
        'ID' : 'murugesan@gmail.com'
      },
      ReturnValues: 'ALL_NEW',
      UpdateExpression: `REMOVE Products[${id}]`
    }).promise();
   }
}
