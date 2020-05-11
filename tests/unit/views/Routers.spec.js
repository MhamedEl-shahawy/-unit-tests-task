import { shallowMount } from "@vue/test-utils";
import Router from "@/router.js";

describe("Testing Navigation", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Router);
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

});
