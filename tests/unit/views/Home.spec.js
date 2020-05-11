import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Testing Navigation", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Home);
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

});
