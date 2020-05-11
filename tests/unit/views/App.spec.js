import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("Testing Navigation", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

});
