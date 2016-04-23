import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { h } from '../helpers/h'
import bindActionCreators from '../helpers/bindActionCreators'

const { h1, button, div } = h

const App = ({children, pushLocation}) => (
div({ className: 'app' },
  h1(null, 'APP FOO'),
  div(null, children),
  button({onClick: () => pushLocation('/about')}, 'about')
)
)

const mapStateToProps = () => ({})

export default connect(
  mapStateToProps,
  bindActionCreators({
    pushLocation: push
  })
)(App)
