// @flow
import type { Mutator } from 'final-form'
import insert from './insert'
import concat from './concat'
import move from './move'
import pop from './pop'
import push from './push'
import remove from './remove'
import removeBatch from './removeBatch'
import shift from './shift'
import swap from './swap'
import unshift from './unshift'
import update from './update'
import unshift2 from './unshift2'

const mutators: { [string]: Mutator<any> } = {
  insert,
  concat,
  move,
  pop,
  push,
  remove,
  removeBatch,
  shift,
  swap,
  unshift,
  update,
  unshift2,
}
export default mutators
