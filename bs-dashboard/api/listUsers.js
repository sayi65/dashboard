import gql from 'graphql-tag'

export default gql`query listUsers {
    listBsProjects {
      items {
          users
      }
    }
  }`;