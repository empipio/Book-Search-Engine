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

input BookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    title: String
    link: String
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
    saveBook(bookData: BookInput): User
    // is this correct for input type? ^
    removeBook(bookId: String!): User
}


`;
module.exports = typeDefs;
