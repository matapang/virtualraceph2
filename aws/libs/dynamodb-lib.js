import AWS from 'aws-sdk';
import config from '../config';

AWS.config.update({region:config.REGION});

export function call(action, params) {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}

export const Test = 'anthony';