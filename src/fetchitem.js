"use strict";

const AWS = require("aws-sdk");

const fetchitem = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.patchParameters

    let item;

    try{
        const result = await dynamodb.get({
                TableName: "ItemTableNew",
                Key: {id}
        }).promise();

        item = result.item;

    } catch (error) {
        console.log(error)
    }

    return{
        statusCode: 200,
        body: JSON.stringify(item)
    }

}
module.exports = {
    handler: getitems,
};
