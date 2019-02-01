import gql from 'graphql-tag'

export default gql`query listBsProjects {
    listBsProjects {
      items {
          agreement
          amount
          classification
          enddate
          kubun
          orders
          pb_classification
          pj_name
          pls
          pms
          sales
          startdate
          supervision
          users
          uuid
      }
    }
  }`;