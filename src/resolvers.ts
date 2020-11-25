import Query from './queries';
import Mutation from './mutations';
import {Vote} from './data';

export default {
  Idea: {
    votes: (idea: any) => Vote.sum('vote', {where: {idea_id: idea.id}}),
  },
  Query,
  Mutation,
};
