# :construction_worker: this is still under construction

# react-redux-bp

> My opinionated react redux boilerplate

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![codecov.io](https://codecov.io/github/stoeffel/react-redux-bp/coverage.svg?branch=master)](https://codecov.io/github/stoeffel/react-redux-bp?branch=master)
[![Build Status](https://travis-ci.org/stoeffel/react-redux-bp.svg?branch=master)](https://travis-ci.org/stoeffel/react-redux-bp)
[![Dependency Status](https://david-dm.org/stoeffel/react-redux-bp.svg)](https://david-dm.org/stoeffel/react-redux-bp)

## Highlights

* no-jsx
* testing
* routing
* persistent state
* sagas
* functional goodies
* testing

## Details

### React

There is no jsx in this repo. You will find a [helper](./src/helper/h.js) to create components.
`h` is the same as `React.DOM` :smiley:.
`hh` creates a function which takes `props` and `children` and calls `createElement`. This is used for 3rd-party components.

```js
import { h } from '../helpers/h'

const {h1} = h
const style = {
  color: 'red'
}

export default ({text}) => (
  h1({style}, text)
)
```


### Testing

There are test examples for all component types. The tests are run using [ava](https://github.com/sindresorhus/ava). Tests coverage is created with [nyc](https://github.com/bcoe/nyc) and linting is done with [standard](https://github.com/feross/standard).
Check out the `tests` folder to see examples for tests or read the [how do I test X guide](./how-do-I-test-X.md).

### Routing

This boilerplate uses [react-router-redux](https://github.com/reactjs/react-router-redux).

All routes are described [src/routes.js](./src/routes/index.js).


### Persistent State

State is persisted using [redux-localstorage](https://github.com/elgerlambert/redux-localstorage).
The parts of the state tree which are persisted are defined in [`presistPaths`](https://github.com/stoeffel/react-redux-bp/blob/master/src/store/persistPaths.js).
