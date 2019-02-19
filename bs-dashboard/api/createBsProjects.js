import gql from 'graphql-tag'

export default gql`mutation createProject($createprojectinput: CreateProjectInput!) {
    createProject(input: $createprojectinput) {
      projectId
    }
  }`