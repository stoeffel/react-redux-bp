import test from 'ava'
import { shallow } from 'enzyme'

import { h } from '../../src/helpers/h'
import Title from '../../src/components/title'

test('title component', t => {
  const wrapper = shallow(Title({ text: 'test' }))
  t.truthy(wrapper.contains(h.h1({ style: { color: 'red' } }, 'test')))
})
