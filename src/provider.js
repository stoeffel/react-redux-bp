import { Provider } from 'react-redux'
import {IntlProvider} from 'react-intl'

import { hh } from './helpers/h'
import store from './store'
import routes from './routes'

const redux = hh(Provider)
const intl = hh(IntlProvider)

const Main = () => redux({store},
  intl({locale: 'en'},
    routes(store)
  )
)

export default hh(Main)
