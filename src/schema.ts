import {gql} from 'apollo-server';

export default gql`
  type Idea {
    id: ID!
    title: String
    description: String
    votes: Int
    hasVoted: Boolean
  }

  type Vote {
    id: ID!
    idea_id: ID!
    vote: Int
  }

  input IdeasQuery {
    title: String
    description: String
  }

  type Query {
    ideas(input: IdeasQuery): [Idea]
  }

  type Mutation {
    createIdea(title: String, description: String): Idea
    upvote(idea_id: ID!): Vote
    downvote(idea_id: ID!): Vote
  }
`;
