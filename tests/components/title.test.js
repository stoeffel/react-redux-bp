import test from 'ava'
import { shallow } from 'enzyme'
import { IntlProvider } from 'react-intl'
import { hh } from '../../src/helpers/h'
import Title from '../../src/components/title'

const title = hh(Title.WrappedComponent)

test('title component', t => {
  const intlProvider = new IntlProvider({locale: 'en'}, {})
  const {intl} = intlProvider.getChildContext()

  const wrapper = shallow(title({ text: 'test', intl }))
  t.truthy(wrapper.text().includes('test'))
})
