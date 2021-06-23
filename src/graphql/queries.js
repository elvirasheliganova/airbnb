/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      image
      title
      description
      bed
      bedroom
      oldPrice
      newPrice
      maxGuests
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        title
        description
        bed
        bedroom
        oldPrice
        newPrice
        maxGuests
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
