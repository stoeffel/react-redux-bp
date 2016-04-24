import test from 'ava'

import { startApp, startingApp, appStarted } from '../../src/actions/app'
import { APP } from '../../src/constants'

test(t => {
  t.deepEqual(startApp(), {
    type: APP.START_APP,
    payload: null
  })
})

test(t => {
  t.deepEqual(startingApp(), {
    type: APP.STARTING_APP,
    payload: null
  })
})

test(t => {
  t.deepEqual(appStarted(), {
    type: APP.APP_STARTED,
    payload: null
  })
})
