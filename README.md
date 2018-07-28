# graphql-server  
  
This is the under the mood coding while reading the article [Your First GraphQL Server](https://github.com/asnov/graphql-server.git).
The article repo is https://github.com/clayallsopp/graphql-intro  
  
To run it:  
`npm start`  
  
To try it:  
`curl -XPOST http://localhost:3000/graphql`  
`curl -XPOST -H "Content-Type:application/graphql"  -d 'query RootQueryType { CountValue }' http://localhost:3000/graphql`  
`curl -XPOST -H 'Content-Type:application/graphql'  -d '{ CountValue }' http://localhost:3000/graphql`  
`curl -XPOST -H 'Content-Type:application/graphql'  -d '{__schema { queryType { name, fields { name, description} }}}' http://localhost:3000/graphql`  
`curl -XPOST -H 'Content-Type:application/graphql' -d 'mutation RootMutationType { updateCountValue }' http://localhost:3000/graphql`  
  
  
Docs:  
http://facebook.github.io/graphql/  
  
  
TO READ:  
- [ ] [Creating A GraphQL Server With Node.js And Express](https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1)  
- [X] [GraphQL Overview - Getting Started with GraphQL and Node.js](http://blog.risingstack.com/graphql-overview-getting-started-with-graphql-and-nodejs/)  
- [ ] [Node.js Interview Questions and Answers](https://blog.risingstack.com/node-js-interview-questions/)  
- [ ] [Fundamental Node.js Design Patterns](https://blog.risingstack.com/fundamental-node-js-design-patterns/)  
  
  
  
