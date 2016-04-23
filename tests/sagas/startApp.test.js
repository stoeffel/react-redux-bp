import test from 'ava'
import { call, put } from 'redux-saga/effects'

import fromGenerator from './fromGenerator'
import { elementById, render } from '../../src/sagas/helpers'
import { HTML } from '../../src/constants'
import { startingApp, appStarted } from '../../src/actions/app'
import { APP } from '../../src/constants'
import watchStartApp, { onStartApp } from '../../src/sagas/startApp'
import Provider from '../../src/provider'

test(t => {
  const next = fromGenerator(onStartApp())

  t.deepEqual(next(), put(startingApp()))
  t.deepEqual(next(), call(elementById, HTML.ROOT_ELEMENT_ID))

  const appDiv = '<div>'
  const val = next(appDiv)
  t.deepEqual(val, call(render, Provider(), appDiv))
  t.deepEqual(next(), put(appStarted()))
})

test(t => {
  const error = new Error('foo')
  const generator = onStartApp()
  const next = fromGenerator(generator)

  t.deepEqual(next(), put(startingApp()))
  t.deepEqual(generator.throw(error).value, put(appStarted(error)))
})

test(t => {
  const next = fromGenerator(watchStartApp())

  t.is(next().TAKE.pattern, APP.START_APP)
  t.is(next().FORK.fn, onStartApp)
})
