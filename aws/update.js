import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';
import uuid from 'uuid';
import config from './config';

async function main(callback, params) {
   try {
    const result = await dynamoDbLib.call('update', params);
    callback(null, success({status: true}));
  }
  catch(e) {
    console.log(e);
    callback(null, failure({status: false, message:e.message}));
  }
}

export async function post(event, context, callback) {
  const data = JSON.parse(event.body);
  console.log(event.requestContext.identity.cognitoIdentityId,event.pathParameters.id );
  const params = {
    TableName: config.DB_TABLE_NAME,
    // 'Key' defines the partition key and sort key of the item to be updated
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'nodeId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      postId: event.pathParameters.id,
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: 'SET content = :content, attachment = :attachment',
    ExpressionAttributeValues: {
      ':attachment': data.attachment ? data.attachment : null,
      ':content': data.content ? data.content : null,
    },
    ReturnValues: 'ALL_NEW',
  };

  main(callback, params);

  /*
  try {
    const result = await dynamoDbLib.call('update', params);
    callback(null, success({status: true}));
  }
  catch(e) {
    console.log(e);
    callback(null, failure({status: false}));
  }*/
};


export async function userRaceLogAdd(event, context, callback) {
  const data = JSON.parse(event.body);
  if (data && !data.log) {
    callback(null, failure({ status: false, error: 'Null Data' }));
  }
    if (data && !data.raceId) {
    callback(null, failure({ status: false, error: 'No Race ID' }));
  }
  const params = {
    TableName: "virtualrun-userracelog",
    // 'Key' defines the partition key and sort key of the item to be updated
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'raceId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      raceId: data.raceId,
    },
    UpdateExpression: 'SET logs = list_append(logs, :log)',
    ExpressionAttributeValues: {
      ':log': data.log ? [data.log] : null,
    },
    ReturnValues: 'ALL_NEW',
  };

  main(callback, params);
};

