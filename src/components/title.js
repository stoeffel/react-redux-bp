import { h } from '../helpers/h'

const {h1} = h
const style = {
  color: 'red'
}

export default ({text}) => (
h1({style}, text)
)
