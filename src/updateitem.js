"use strict";

const AWS = require("aws-sdk");

const updateitem = async (event) =>{

    const{itemStatus} = JSON.parse(event.body);
    const {id} = event.pathParameters

    const dynamoDB = new AWS.DynamoDB.DocumentClient();

    await dynamoDB.update({
        TableName: "ItemTableNew",
        key: {id},
        updateExpression: 'set itemStatus = :itemStatus',
        ExpressionAttributeValues: {
            ':itemStatus': itemstatus
        },
        ReturnValues: "ALL_NEW"
    }).promise()

    return {
        statuscode: 200,
        body: JSON.stringify({
            msg: 'item updated'
        }),
    };
}

module.exports = {
    handler: getitems,
};