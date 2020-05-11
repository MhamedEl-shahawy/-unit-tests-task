import { mount } from "@vue/test-utils";
import UndoTodos from "@/views/UndoTodos.vue";

describe("Testing UndoneTodos view", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(UndoTodos);
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });
});