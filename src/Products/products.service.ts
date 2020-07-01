import { Injectable } from '@nestjs/common';
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

@Injectable()
export class ProductsService {
  
async getProduct(id :string){
    return await dynamodb.get({
      TableName: 'Catagories',
      Key: {
        'ID' : id
      }
     }).promise();

  }
}
