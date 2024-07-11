// import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('should render Come on!', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Come on!' } })

    console.log(wrapper.text());

    expect(wrapper.text()).toContain('Come on!')
    // spodziewamy sie w h1 tego tekstu:
    expect(wrapper.get('h1.green').text()).toContain('Come on!')
    expect(wrapper.get('[data-testid="msg"]').text()).toContain('Come on!')
  })
})
