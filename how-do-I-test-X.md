How do I test X?
================

Reducers
--------

Reducers are tested with [`testReducer`](./test/reducers/testReducer).
`testReducer` take `t` from ava and the reducer and creates a function `assertReducer`.

`assertReducers` takes the initial state the expected state after the reduction of the action
and the action.

```js
import test from 'ava'

import testReducer from './testReducer'
import appReducer from '../../src/reducers/app'
import { appStarted } from '../../src/actions/app'

test(t => {
  const assertReducer = testReducer(t, appReducer)
  const init = {
    started: false
  }
  const expected = {
    started: true
  }

  assertReducer(
    init,
    expected,
    appStarted()
  )
})
```

`assertReducer` is curried. This allows you to make dry tests.

```js
test(t => {
  const init = {
    started: false
  }
  const assertReducer = testReducer(t, appReducer)(init)

  assertReducer(
    { started: true },
    appStarted()
  )
  assertReducer(
    { started: false },
    appStarted(new Error('foo'))
  )
})
```

