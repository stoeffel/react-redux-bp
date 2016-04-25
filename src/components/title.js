import {FormattedMessage, injectIntl} from 'react-intl'
import { h, hh } from '../helpers/h'

const message = hh(FormattedMessage)
const {h1} = h
const style = {
  color: 'red'
}

const Title = ({text}) => (
h1({style},
  message({id: 'app.title', 'defaultMessage': 'Hello'}),
  text
)
)

export default injectIntl(Title)
