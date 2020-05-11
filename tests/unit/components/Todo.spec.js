import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";

describe("Testing Todo", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Todo, {
      propsData: {
        description: "test todo",
        completed: false
      }
    });
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });



  it("finish editing and emit on-edit  correctly", () => {
    wrapper.setData({
      isEditing: true
    });
    wrapper.vm.finishEditing();

    expect(wrapper.vm.isEditing).toBe(false);
    expect(wrapper.emitted("on-edit").length).toBe(1);
  });

  it("emits on-delete  correctly", () => {
    const deleteTodoBtn = wrapper.find(".del-todo");
    deleteTodoBtn.trigger("click");
    expect(wrapper.emitted("on-delete").length).toBe(1);
  });

  it("starts editing correctly", () => {
    // in case of isEditing is true
    wrapper.setData({
      isEditing: true
    });
    const finishEditingFn = jest.fn();
    wrapper.setMethods({
      finishEditing: finishEditingFn
    });
    wrapper.vm.startEditing();
    expect(finishEditingFn).toHaveBeenCalled();

    // in case of isEditing is false
    wrapper.setData({
      isEditing: false
    });
    wrapper.vm.startEditing();
    expect(wrapper.vm.newTodoDescription).toEqual(wrapper.vm.description);
    expect(wrapper.vm.isEditing).toBeTruthy();
  });
});
