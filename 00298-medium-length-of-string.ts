// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]


// ============= Your Code Here =============
type String2CharTuple<S extends string> = S extends `${infer F}${infer R}` ? [F, ...String2CharTuple<R>] : []
type LengthOfString<S extends string> = String2CharTuple<S>['length']
