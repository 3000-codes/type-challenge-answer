// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]


// ============= Your Code Here =============
type Diff<O, O1> = {
  // 提取出 O 和 O1 的所有 key 的并集 keyof O | keyof O1
  // 然后排除掉 O 和 O1 的所有 key 的交集 keyof O & keyof O1
  // 最后剩下的就是 O 和 O1 的差集
  [K in Exclude<keyof O | keyof O1, keyof O & keyof O1>]: K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never
}
