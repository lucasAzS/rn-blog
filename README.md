# How to run

     npm i
     npm start

## json-server and ngrok

In another folder that we can call jsonServer we gonna run json-server and ngrok

    npm i json-server ngrok

add to jsonServer package.json: 

`"scripts": { "db": "json-server -w db.json", "tunnel": "ngrok http 3000" },`
