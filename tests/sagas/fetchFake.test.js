import test from 'ava'
import { call, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'

import fromGenerator from './fromGenerator'
import watchFetchFake, { onFetch } from '../../src/sagas/fetchFake'
import { delay } from '../../src/sagas/helpers'
import { fake } from '../../src/actions'
import { FAKE } from '../../src/constants'

const {FETCH} = FAKE
const {fetching, fetched} = fake

const payload = 'foo'

test(t => {
  const next = fromGenerator(onFetch({ payload }))

  t.deepEqual(next(), put(fetching(payload)))
  t.deepEqual(next(), call(delay, 2000))
  t.deepEqual(next(), call(fetch, './fixtures/fakeData.json'))
  const result = 'test'
  const response = {
    json () {
      return result
    }
  }
  t.deepEqual(next(response), call([response, response.json]))
  t.deepEqual(next(result), put(fetched(result)))
})

test(t => {
  const error = new Error('foo')
  const generator = onFetch({ payload })
  const next = fromGenerator(generator)

  t.deepEqual(next(), put(fetching(payload)))
  t.deepEqual(generator.throw(error).value, put(fetched(error)))
})

test(t => {
  const next = fromGenerator(watchFetchFake())

  t.is(next().TAKE.pattern, FETCH)
  t.is(next().FORK.fn, onFetch)
})
