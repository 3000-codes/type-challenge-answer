// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<number>, false>>,
]
// type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}` ? R : `${T}`
// type Last<T extends any[]> = T extends [...infer _, infer U] ? U : never

// ============= Your Code Here =============
type Odd = '1' | '3' | '5' | '7' | '9'
type IsOdd<T extends number> = `${T}` extends `${infer R}${Odd}` ? true : false
