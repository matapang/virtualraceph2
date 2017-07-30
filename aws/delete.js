import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';
import config from './config';

async function main(callback, params) {
  try {
    const result = await dynamoDbLib.call('delete', params);
    callback(null, success({ status: true }));
  }
  catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
}

export async function post(event, context, callback) {
  console.log(event.pathParameters.id)
  const params = {
    TableName: config.DB_TABLE_NAME,
    // 'Key' defines the partition key and sort key of the item to be removed
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      postId: event.pathParameters.id,
    },
  };

  try {
    const result = await dynamoDbLib.call('delete', params);
    callback(null, success({ status: true }));
  }
  catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
};

export async function userRaces(event, context, callback) {
  console.log(event.pathParameters.id)
  const params = {
    TableName: "virtualrun-userraces",
    // 'Key' defines the partition key and sort key of the item to be removed
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'raceId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      raceId: event.pathParameters.id,
    },
  };
  //await main(callback, params);
  try {
    const result = await dynamoDbLib.call('delete', params);
    callback(null, success({ status: true }));
  }
  catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
};