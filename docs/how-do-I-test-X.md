How do I test X?
================

X === Reducers
--------

Reducers are tested with [`testReducer`](./test/reducers/testReducer).
`testReducer` take `t` from ava and the reducer and creates a function `assertReducer`.

`assertReducers` takes the initial state the expected state after the reduction of the action
and the action.

```js
// ...
import testReducer from './testReducer'
import appReducer from '../../src/reducers/app'
// ...

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
// ...
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

X === Components
----------

Components are tested with [enzyme](https://github.com/airbnb/enzyme).
It's recommended to use `shallow`-rendering for component tests.

```js
import { shallow } from 'enzyme'
// ...

test(t => {
  const wrapper = shallow(Title({ text: 'test' }))
  t.truthy(wrapper.contains(h.h1({ style: { color: 'red' } }, 'test')))
})
```

X === Containers
----------

Containers are tested with [enzyme](https://github.com/airbnb/enzyme) and [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store).
It's recommended to use `mount` for container tests.
You can simulate clicks and other events and then assert what actions were dispatched.

```js
t.deepEqual(store.getActions(), [ // <= get all dispatched actions
  fake.fetch() // <= actionCreator
])
```

```js
// ...
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'

const mockStore = configureStore()

test('is fetching', t => {
  const store = mockStore() // create a mocked store
  const wrapper = mount(createElement(About, { // <= mount the container
    store, // <= pass the mocked store
    text: 'test',
    fake: {
      isFetching: true
    }
  }))

  t.is(wrapper.find('h1').text(), 'ABOUT: loading...')
  t.deepEqual(store.getActions(), [
    fake.fetch()
  ])
})
```