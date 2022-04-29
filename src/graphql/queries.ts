import { gql } from "@apollo/client";

const GET_PERSON = gql`
  query MyQuery($id: ID!) {
    getPerson(id: $id) {
      age
      gender
      id
      name
    }
  }
`;

const GET_SEX = gql`
  query MyQuery($id: ID!) {
    getSex(id: $id) {
      id
      people {
        id
        name
        gender
        age
      }
      position
    }
  }
`;
