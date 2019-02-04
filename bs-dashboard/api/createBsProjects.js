import gql from 'graphql-tag'

export default gql`mutation createBsProject($createbsprojectinput: CreateBsProjectInput!) {
    createBsProject(input: $createbsprojectinput) {
      uuid
    }
  }`