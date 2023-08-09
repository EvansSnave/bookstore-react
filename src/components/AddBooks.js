/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuidv4 } from 'uuid';

const Addbooks = (title, author) => ({
  title,
  author,
  id: uuidv4(),
});

export default Addbooks;
