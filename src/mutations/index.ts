import {Idea, Vote} from '../data';

export interface VoteRequest {
  idea_id: string;
}

export default {
  async createIdea(root: any, idea: any) {
    return await Idea.create(idea);
  },
  async upvote(root: any, {idea_id}: VoteRequest) {
    return await Vote.create({idea_id, vote: 1});
  },
  async downvote(root: any, {idea_id}: VoteRequest) {
    return await Vote.create({idea_id, vote: -1});
  },
};
