// ============= Test Cases =============
import type { Equal, Expect, NotEqual } from './test-utils'

type cases = [
  Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi'; true: 'bool' }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<Equal<{ val2: 'prop2'; val: 'prop' }, Flip<{ prop: 'val'; prop2: 'val2' }>>>,
]


// ============= Your Code Here =============
type Flip<T extends Record<string, unknown>> = {
  [K in keyof T as T[K] extends string ? T[K] : T[K] extends number | boolean ? `${T[K]}` : never]: K extends 'true' ? true : K extends 'false' ? false : K
}

type A = Flip<{ pi: 3.14; bool: true }>