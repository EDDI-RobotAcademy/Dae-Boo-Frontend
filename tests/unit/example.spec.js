import { createApp } from 'vue';
import { mount } from '@vue/test-utils';
import GlobalComponent from '@/components/componentTest/GlobalComponent.vue';

const app = createApp({});
app.component(GlobalComponent.name, GlobalComponent);

describe('GlobalComponent.vue props 테스트', () => {
  it('renders props.initialTest when passed', () => {
    let initialTest = 0;
    const wrapper = mount(GlobalComponent, {
      props: {
        initialTest: initialTest,
      },
    });
    expect(wrapper.props().initialTest).toBe(initialTest);
  });
});
