import gql from 'graphql-tag'

export default gql`query listProjects {
  listProjects {
      items {
          users
          pj_name
          sales
          pls
          pms
      }
    }
  }`;