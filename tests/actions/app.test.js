import test from 'ava'

import { startApp, startingApp, appStarted } from '../../src/actions/app'
import { APP } from '../../src/constants'
import testAction from './testAction'

test(t => {
  const assertAction = testAction(t, startApp)

  assertAction(
    [],
    APP.START_APP
  )
})

test(t => {
  const assertAction = testAction(t, startingApp)

  assertAction(
    [],
    APP.STARTING_APP
  )
})

test(t => {
  const assertAction = testAction(t, appStarted)

  assertAction(
    [],
    APP.APP_STARTED
  )
})
