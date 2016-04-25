import test from 'ava'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { createElement } from 'react'
import { fake } from '../../src/actions'

import Enhanced, { About } from '../../src/containers/about'

const mockStore = configureStore()

test('calls action', t => {
  const store = mockStore()
  shallow(createElement(Enhanced, {
    store
  })).shallow()

  t.deepEqual(store.getActions(), [
    fake.fetch()
  ])
})

test('is fetching', t => {
  const wrapper = shallow(createElement(About, {
    text: 'test',
    fake: {
      isFetching: true
    }
  }))

  t.is(wrapper.find({text: 'ABOUT: loading...'}).length, 1)
})

test('fetched', t => {
  const wrapper = shallow(createElement(About, {
    text: 'test',
    fake: {
      isFetching: false,
      data: 'Hello'
    }
  }))

  t.is(wrapper.find({text: 'ABOUT: Hello'}).length, 1)
})
