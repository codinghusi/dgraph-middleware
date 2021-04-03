import { ApolloServer, gql, SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver } from 'graphql';
import { astToQuery } from './ast-to-query';

const ast = gql`

enum MyEnum @asdf {
  first
  second
}

""" Hello """
scalar MyType @directive

type MyObjectType {
  id: ID!
}

extend type MyObjectType {
  id: ID!
}

extend input InputType {
	name: String! = "hey" @hi
}

directive @deprecated(
  reason: String = "No longer supported"
) repeatable on FIELD_DEFINITION | ENUM_VALUE

union UnionType @asdf = A | B 

interface Interface {
 	id: ID! @id,
  	asf: String
}

query GetUser($userId: [String]! = "0x123") {
  user(id: $userId) {
    id @id(a: "b") {
   	asdf 
  },
    aliasName: name,
    isViewerFriend,
    profilePicture(size: {foo: "bar"})  {
      ...PictureFragment
    }
  	... on Droid @id {
        primaryFunction
    }
  }
}

fragment PictureFragment on Picture {
  uri,
  width,
  height
}
`;

console.log(astToQuery(ast));