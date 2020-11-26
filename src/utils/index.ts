import * as Sequelize from 'sequelize';
const {Op} = Sequelize;

export function constructWhereQuery(input: {[key: string]: string}) {
  if (!input) return {};

  return Object.keys(input).reduce((query, field) => {
    query[field] = {[Op.iLike]: `%${input[field]}%`};
    return query;
  }, {} as any);
}
