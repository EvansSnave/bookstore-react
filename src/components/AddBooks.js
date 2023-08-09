/* eslint-disable import/no-extraneous-dependencies */
import { v4 as uuidv4 } from 'uuid'

const Addbooks = (title, author) => {
  return {
    title: title,
    author: author,
    id: uuidv4(),
  }
}
