import { shallowMount } from "@vue/test-utils";
import Main from "@/main.js";

describe("Testing Navigation", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Main);
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

});
