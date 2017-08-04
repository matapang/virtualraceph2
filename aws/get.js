import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';
import config from './config';

async function main(callback, params) {
  try {
    const result = await dynamoDbLib.call('get', params);
    if (result.Item) {
      // Return the retrieved item
      callback(null, success(result.Item));
    }
    else {
      callback(null, failure({ status: false, error: 'Item not found.' }));
    }
  }
  catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
}

export async function post(event, context, callback) {
  const params = {
    TableName: config.DB_TABLE_NAME,
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'nodeId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      postId: event.pathParameters.id,
    },
  };

  try {
    const result = await dynamoDbLib.call('get', params);
    if (result.Item) {
      // Return the retrieved item
      callback(null, success(result.Item));
    }
    else {
      callback(null, failure({ status: false, error: 'Item not found.' }));
    }
  }
  catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
};


export async function userRaces(event, context, callback) {
  const params = {
    TableName: "virtualrun-userraces",
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'nodeId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      raceId: event.pathParameters.id,
    },
  };
  await main(callback, params);
};



export async function userRaceLog(event, context, callback) {
  console.log(`${event.requestContext.identity.cognitoIdentityId}|${event.pathParameters.id}`);
  const params = {
    TableName: "virtualrun-userracelog",
    // 'Key' defines the partition key and sort key of the item to be retrieved
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'id': the race id
    Key: {
      userId: `${event.requestContext.identity.cognitoIdentityId}`,
      raceId:event.pathParameters.id,
    },
  };
  await main(callback, params);
};