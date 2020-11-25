import * as Sequelize from 'sequelize';

import {Idea} from '../data';
const {Op} = Sequelize;

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
      where: Object.keys(input).reduce((query, field) => {
        query[field] = {[Op.iLike]: `%${input[field]}%`};
        return query;
      }, {} as any),
    });
  },
};
