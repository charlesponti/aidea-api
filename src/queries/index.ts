import {Idea} from '../data';
import {constructWhereQuery} from '../utils';

export interface Idea {
  title: string;
  description: string;
}

export interface IdeaRequest {
  input: {
    title: string;
    description: string;
    [key: string]: string;
  };
}

export type IdeasResponse = Idea[];

export default {
  async ideas(root: any, {input}: IdeaRequest) {
    return await Idea.findAll({
      where: constructWhereQuery(input),
    });
  },
};
