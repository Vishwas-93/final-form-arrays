// @flow
import type { MutableState, Mutator, Tools } from 'final-form'

const unshift2: Mutator<any> = ([name, value]: any[], state: MutableState<any>, { changeValue }: Tools<any>) => {
  changeValue(state, name, (array: ?(any[])): any[] => (array ? [...array.reverse(), value].reverse() : [value]))
}

export default unshift2
