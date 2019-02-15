import gql from 'graphql-tag'

export default gql`query listUsers {
    listBsProjects {
      items {
          users
          pj_name
          sales
          pls
          pms
      }
    }
  }`;