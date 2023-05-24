"use strict";

const AWS = require("aws-sdk");

const getitems =async (event) => {

    const dynamoDB =new AWS.DynamoDB.documentClinet();

    let items;

    try {
        const results = await dynamoDB.scan({
            TableName: "ItemtableNew"
        }).promise();

        items = results.items
    } catch(error){
        console.log(error)
    }

    return {
        statusCode: 200,
        body :JSON.stringify(items),
    };
}

module.exports = {
    handler: getitems,
};