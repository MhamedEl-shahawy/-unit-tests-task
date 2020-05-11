import { mount } from "@vue/test-utils";
import DoneTodos from "@/views/DoneTodos.vue";
import TodoList from "@/components/TodoList.vue";

describe("Testing DoneTodos view", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(DoneTodos);
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });


});
