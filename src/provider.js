import { Provider } from 'react-redux'

import { hh } from './helpers/h'
import store from './store'
import routes from './routes'

const provider = hh(Provider)

const Main = () => provider({store},
  routes(store)
)

export default hh(Main)
