import { gql } from 'apollo-server-express'

export const schema = gql`
  # type Post {
  #   id:        Int
  #   createdAt: String
  #   updateAt:  String
  #   title:     String
  #   content:   String
  #   published: Boolean
  #   author:    User
  #   authorId:  Int
  # }

  # type Profile {
  #   id:   Int
  #   bio:  String
  #   user: User
  # }

  # type User {
  #   id:      Int
  #   emai:    String
  #   name:    String
  #   posts:   [Post]
  #   profile: Profile
  # }

  type Query {
    hello: String
  }

  # type Query {
  #   users: [User]
  # }
`