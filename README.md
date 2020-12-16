# nodejs-typescript-api

- run `npm install`
- run `npm run dev` for development
- run  `npm run build` and `npm run start` for production


### Node.js Project Requirements

Technology Stack
-	Node.js
-	TypeScript
-	Express

Functionality and Design
The application must expose restful endpoints that will parse data (passed in the request body) and return the value back to the client. The API will have two versions and depending on the version endpoint, the parsing of the data will return a different value back to the client. Use TypeScript interfaces so the code assumes the design / object properties.
Submit your code via your personal github repository, and turn in the link for review.

Endpoints:
- /api/v1/parse (POST)
- /api/v2/parse (POST)


Request Body
```json5
{
  data: "JOHN0000MICHAEL0009994567"
}
```


Expected Results:
- /api/v1/parse – Response Body

```json5
{
  statusCode: 200,
  data: {
    firstName: "JOHN0000",
    lastName:  "MICHAEL000",
    clientId:  "9994567"
  }
}
```

- /api/v2/parse – Response Body

```json5
{
  statusCode: 200,
  data:  {
    firstName: "JOHN",
    lastName:  "MICHAEL",
    clientId:  "999-4567"
  }
}
```


