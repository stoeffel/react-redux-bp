import { not, pick, compose, ifElse } from 'ramda'
import { connect } from 'react-redux'
import bindActionCreators from '../helpers/bindActionCreators'
import { fake } from '../actions'
import Title from '../components/title'
import { mount } from '../enhancers'
import { h, hh } from '../helpers/h'

const { div } = h
const text = 'ABOUT'
const title = hh(Title)

export const About = ({children, fake, intl}) => (
div(null,
  ifElse(
    not,
    () => title({text: `${text}: ${fake.data}`}),
    () => title({text: `${text}: loading...`})
  )(fake.isFetching)
))

export default compose(
  connect(
    pick([ 'fake' ]),
    bindActionCreators({
      fetchFakeData: fake.fetch
    })
  ),
  mount(
    ({fetchFakeData}) => fetchFakeData()
  )
)(About)
