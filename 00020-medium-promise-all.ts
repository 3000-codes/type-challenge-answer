// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
  Expect<Equal<typeof promiseAllTest4, Promise<number[]>>>,
]


// ============= Your Code Here =============
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T
// declare function PromiseAll<T extends any[]>(val: T): Promise<{ [K in keyof T]: UnwrapPromise<T[K]> }>
declare function PromiseAll<T extends any[]>(val: readonly [...T]): Promise<{ [K in keyof T]: UnwrapPromise<T[K]> }>


type A = typeof promiseAllTest3