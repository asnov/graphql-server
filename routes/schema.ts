import { GraphQLInt, GraphQLObjectType, GraphQLSchema } from 'graphql';

let countValue = 0;

const schema = new GraphQLSchema({

  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      CountValue: {
        type: GraphQLInt,
        description: 'The count!',
        resolve: function() {
          return countValue;
        },
      },
    },
  }),

  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      updateCountValue: {
        type: GraphQLInt,
        description: 'Updates the count',
        resolve: function() {
          countValue += 1;
          return countValue;
        },
      },
    },
  }),

});

export default schema;
