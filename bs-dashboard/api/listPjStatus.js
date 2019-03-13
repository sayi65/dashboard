import gql from 'graphql-tag'

export default gql`
  query listStatus {
    listStatuses {
      items {
        statusId
        projects {
          items {
            projectId
            pj_name
            pls
            pms
            users
            startdate
            enddate
          }
        }
      }
    }
  }
`
