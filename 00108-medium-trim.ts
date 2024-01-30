// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import type { TrimLeft } from './00106-medium-trimleft'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]


// ============= Your Code Here =============
type TrimRight<S extends string> = S extends `${infer L}${' ' | '\n' | '\t'}` ? TrimRight<L> : S
type Trim<S extends string> = TrimRight<TrimLeft<S>>
