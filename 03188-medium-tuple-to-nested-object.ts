// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]


// ============= Your Code Here =============
type TupleToNestedObject<T extends string[], U> = T['length'] extends 0 ? U : // if T is empty, return U
  T extends [infer F, ...infer R] ?
  {
    [K in F as K extends string ? K : never]: // if K is string, return K, else return never
    R extends string[] ? TupleToNestedObject<R, U> : never
  } : never


type A = TupleToNestedObject<['a', 'b'], number>