import { Injectable } from '@nestjs/common';
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();


@Injectable()
export class AdminProductsService {
  async save(product): Promise<string> {
     const catagories = {
      TableName: 'Catagories',
      Key:{
        ID : product.category
      },
      UpdateExpression: "SET #Products = list_append(if_not_exists(#Products, :new_list), :vals)",
            ExpressionAttributeNames: {
                "#Products": "Products"
            },
            ExpressionAttributeValues: {
                ":vals":  [{
                   name        : product.name,
                   imageUrl    : product.imageUrl,
                   description : product.description,
                   price       : product.price,
                   category    : product.category
 
                }],
                ":new_list":  [{ 
                  name        : product.name,
                  imageUrl    : product.imageUrl,
                  description : product.description,
                  price       : product.price,
                  category    : product.category}]
            },
      }
    await dynamodb.update(catagories).promise();
   return "The product is added successfully";
  }

async get(id : string){
 return await dynamodb.get({
    TableName: 'Catagories',
    Key: {
      'ID' : id
    },
   }).promise();
}

async update(product){

  return await dynamodb.update({
    TableName: 'Catagories',
    Key:{
      'ID' : product.category
    },
    ReturnValues: 'ALL_NEW',
    UpdateExpression: `SET Products[${product.id}].price = :price`,
    ExpressionAttributeValues:{
      ':price' : product.price
    }
  }).promise();
}  

async delete(id :number){
  return await dynamodb.update({
    TableName: 'Catagories',
    Key:{
      'ID' : id
    },
    ReturnValues: 'ALL_NEW',
    UpdateExpression: `REMOVE Products[${id}]`
  }).promise();

  
 }
}


