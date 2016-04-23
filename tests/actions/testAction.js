import { ifElse, assoc, identity } from 'ramda'

const assocIfDefined = (key, value) => ifElse(
  () => !!value,
  assoc(key, value),
  identity
)

export default function (t, actionCreator) {
  return (args, type, payload, meta) => {
    return t.deepEqual(
      actionCreator(...args),
      assocIfDefined('meta', meta)({type, payload})
    )
  }
}
