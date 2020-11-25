import * as Sequelize from 'sequelize';
import logger from '../logger';
const {DATABASE_URL = ''} = process.env;

export const sequelize = new Sequelize.Sequelize(DATABASE_URL, {
  logging: (msg: string) => logger.log('info', `🎒 ${msg}`),
});

sequelize
  .authenticate()
  .then(() => {
    logger.info('✅ Connected to PostgreSQL 🎒');
  })
  .catch(e => {
    logger.info(`🛑 Unable to connect to PostgreSQL 🎒... \n ${e}`);
  });

export const Idea = sequelize.define('idea', {
  title: {type: Sequelize.STRING},
  description: {type: Sequelize.STRING, allowNull: false},
});

export const Vote = sequelize.define('vote', {
  vote: {type: Sequelize.INTEGER, allowNull: false},
});

Idea.hasMany(Vote, {foreignKey: 'idea_id'});
Vote.belongsTo(Idea, {foreignKey: 'idea_id'});
