import gql from 'graphql-tag'

export default gql`query listStatuses {
  listStatuses {
      items {
        statusId
        projectId
        status
        tittle
        updated
        created
        userId
        value
      }
    }
  }`;