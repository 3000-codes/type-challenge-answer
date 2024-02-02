// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type obj = {
  person: {
    name: string
    age: {
      value: number
    }
  }
}

type cases = [
  Expect<Equal<DeepOmit<obj, 'person'>, {}>>,
  Expect<Equal<DeepOmit<obj, 'person.name'>, { person: { age: { value: number } } }>>,
  Expect<Equal<DeepOmit<obj, 'name'>, obj>>,
  Expect<Equal<DeepOmit<obj, 'person.age.value'>, { person: { name: string; age: {} } }>>,
]


// ============= Your Code Here =============
type DeepOmit<T extends object, K extends string> =
  K extends `${infer F}.${infer R}` ? // 如果匹配到多个层级
  F extends keyof T ? // 如果F是T的key，继续递归
  {
    [P in keyof T]: T[P] extends object ? DeepOmit<T[P], R> : T[P]
  }
  : T // 如果F不是T的key，返回T（递归结束）
  : K extends keyof T ? // 如果匹配到最后一层，进行删除（递归结束）
  {
    [P in keyof T as P extends K ? never : P]: T[P]
  }
  : T // 如果没有匹配到，返回T（递归结束）
