import { shallowMount } from "@vue/test-utils";
import CreateTodo from "@/components/CreateTodo.vue";

describe("CreateTodo", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CreateTodo);
  });

  it("on-new-todo event with the correct data", () => {
    wrapper.setData({
      newTodo: "test todo"
    });
    wrapper.vm.addTodo();
    expect(wrapper.emitted("on-new-todo")[0]).toContain("test todo");
    expect(wrapper.emitted("on-new-todo").length).toBe(1);
  });

  it("doesn't emit on-new-todo event with the correct data", () => {
    wrapper.setData({
      newTodo: ""
    });
    wrapper.vm.addTodo();

    expect(wrapper.emitted("on-new-todo")).toBeFalsy;
  });
});
