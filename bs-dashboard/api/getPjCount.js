import gql from 'graphql-tag'

export default gql`
  query listProjects {
    listProjects {
      items {
        projectId
      }
    }
  }
`
