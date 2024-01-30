// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]


// ============= Your Code Here =============
type Replace<S extends string, From extends string, To extends string> =
  From extends '' ? S :
  S extends `${infer L}${From}${infer R}` ? `${L}${To}${R}` : S  // only replace the first occurrence
// S extends `${infer L}${From}${infer R}` ? `${L}${To}${Replace<R, From, To>}` : S // replace all occurrences

type A1 = Replace<'foobarbar', 'bar', ''>