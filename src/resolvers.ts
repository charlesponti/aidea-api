import Query from './queries';
import Mutation from './mutations';
import {Vote} from './data';

const resolvers = {
  Idea: {
    votes: async (idea: any) => {
      const response = await Vote.sum('vote', {where: {idea_id: idea.id}});
      if (isNaN(response)) return 0;
      return response;
    },
  },
  Query,
  Mutation,
};

export default resolvers;
