import gql from 'graphql-tag'

export default CreateBsProjects = gql`mutation createBsProject($createbsprojectinput: CreateBsProjectInput!) {
    createBsProject(input: $createbsprojectinput) {
      uuid
    }
  }`