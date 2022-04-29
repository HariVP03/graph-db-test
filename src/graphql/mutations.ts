import { gql } from "@apollo/client";

const ADD_PERSON = gql`
  mutation MyMutation($age: Int!, $gender: Gender!, $name: String!) {
    addPerson(input: { age: $age, gender: $gender, name: $name }) {
      person {
        age
        gender
        id
        name
      }
    }
  }
`;

const ADD_SEX = gql`
  mutation MyMutation($position: [String], $people: [PersonRef]) {
    addSex(input: { people: $people, position: $position }) {
      sex {
        position
        people {
          age
          gender
          id
          name
        }
      }
    }
  }
`;
