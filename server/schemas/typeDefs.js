const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    // check whether need ! and that email is correct
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
    // is image a string????
}

type Auth {
    token: String
    user: [User]
}

type Query {
    me: [User]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookId: String!, authors: [String!], description: String, title: String!, image: String, link: String): User
    // does this really accept user type? Not book?
    // look into input type for all of this ^
    removeBook(bookId: String!): User
}


`;
module.exports = typeDefs;
