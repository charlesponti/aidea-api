import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve(__dirname, '../.env.test')});

jest.mock('./data/index', () => ({
  Idea: {
    findAll: () => [{id: 1, title: 'foo', description: 'foo bar baz'}],
  },
}));
