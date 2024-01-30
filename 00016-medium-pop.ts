// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import type { Length } from './00018-easy-tuple-length'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]


// ============= Your Code Here =============
// type Pop<T extends any[]> = T extends [...infer U, any] ? U : never
type Pop<T extends any[]> = Length<T> extends 0 ? [] : T extends [...infer U, any] ? U : never
