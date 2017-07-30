import uuid from 'uuid';
import AWS from 'aws-sdk';

import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';
import config from './config'

//Enable only if you have multiple credentials in system
//const credentials = new AWS.SharedIniFileCredentials({profile: 'my-profile'});
// AWS.config.credentials = credentials;

//AWS.config.update({ region: 'us-east-1' });
//const dynamoDb = new AWS.DynamoDB.DocumentClient();
async function main(callback, params){
    try {
        const result = await dynamoDbLib.call('put', params);
        callback(null, success(params.Item));
    }
    catch (e) {
        console.log(e);
        callback(null, failure({ status: false }));
    }
}

export async function post(event, context, callback) {
    const data = JSON.parse(event.body);
    const params = {
        TableName: config.DB_TABLE_NAME,
        Item: {
            userId: event.requestContext.identity.cognitoIdentityId,
            postId: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: new Date().getTime(),
        },
    };

    try {
        const result = await dynamoDbLib.call('put', params);
        callback(null, success(params.Item));
    }
    catch (e) {
        console.log(e);
        callback(null, failure({ status: false }));
    }
}


export async function userRaces(event, context, callback) {
    const data = JSON.parse(event.body);
    const params = {
        TableName: "virtualrun-userraces",
        Item: {
            userId: event.requestContext.identity.cognitoIdentityId,
            raceId: data.raceId,
            numParticipants:data.numParticipants,
            orders:data.orders,
            createdAt: new Date().getTime(),
        },
    };
    await main(callback, params);
}