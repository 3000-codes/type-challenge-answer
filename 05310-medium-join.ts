// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
  Expect<Equal<Join<[], 'u'>, ''>>,
]


// ============= Your Code Here =============
type Join<T extends string[], U extends string | number> =
  T extends [] ? '' : T extends [infer F, ...infer R] ?
  F extends string | number ?
  R extends [] ? `${F}` :
  R extends string[] ?
  `${F}${U}${Join<R, U>}` : never : never
  : never
