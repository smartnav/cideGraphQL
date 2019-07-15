import { gql } from "apollo-server-express";

export default gql`
    type Query {
        cycle : [Cycle!]
    }
    
    type Mutation {
        addCycle(): Cycle
    }

    type Cycle {
        _id : ID!
        name : String!
    }
`