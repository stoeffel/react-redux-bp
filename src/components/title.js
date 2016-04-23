import { h, hh } from '../helpers/h'

const {h1} = h
const style = {
  color: 'red'
}

export default hh(({text}) => (
h1({style}, text)
))
