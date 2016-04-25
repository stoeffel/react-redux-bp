React
=====

<!-- RM(content) -->

[Got to top](/README.md)




<!-- /RM -->


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

Dispite my recommendation to use functions instead of jsx. Manly, because jsx adds a lot off useless boilerplate and functions are better to compose. You can use it ([example](https://github.com/stoeffel/react-redux-bp/blob/master/src/containers/about.js#L20)).

