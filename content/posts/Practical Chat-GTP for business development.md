---
title: A practical solution from Chat-GTP
slug: Apollo graphql multiple endpoins
date: Jan 1, 2023
createdAt: January 1, 2023 11:49 PM
author: Douglas Richards
issue: Use AWS Amplify framework and external graphql API
solution: Chat-GTP provided code example using ApolloLink.split
postColor: 'bg-orange-600 dark:bg-blue-600'
category: 'Coding'
---

## Objective

Use AWS Amplify framework for auth and DynamoDB backend services plus getting data from a crypto API graphql endpoint.

Clearly needed two clients to connect to the two services. Question was how to use two Apollo clients with ApolloProvider?

## Chat with Chat-GTP

Here's an example of how you could design a Lambda function to make GraphQL queries to an external API using AWS AppSync:

Copy code
import json
import requests

def lambda_handler(event, context): # Extract the GraphQL query from the event
query = event['query']

    # Set the endpoint for the external API
    endpoint = 'https://api.example.com/graphql'

    # Set the headers for the request
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
    }

    # Make the POST request to the external API
    response = requests.post(endpoint, json={'query': query}, headers=headers)

    # Extract the data from the response
    data = response.json()['data']

    # Return the data to the AppSync resolver
    return {
        'data': data
    }

This function expects an event object with a query field, which contains the GraphQL query to be executed by the external API. It then makes a POST request to the API endpoint with the query in the request body and the necessary headers (e.g. Content-Type, Authorization). Finally, it extracts the data from the response and returns it to the AppSync resolver.

Note that this is just an example and may need to be modified to fit your specific use case.

Regenerate response
