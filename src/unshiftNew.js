// @flow
import type { MutableState, Mutator, Tools } from 'final-form'

const unshiftNew: Mutator<any> = ([name, value]: any[], state: MutableState<any>, { changeValue }: Tools<any>) => {
  changeValue(state, name, (array: ?(any[])): any[] => (array ? [...array.reverse(), value].reverse() : [value]))
}

export default unshiftNew
