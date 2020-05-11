import { shallowMount } from "@vue/test-utils";
import Navigation from "@/components/Navigation.vue";

describe("Testing Navigation", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Navigation, {
      stubs: ["router-link", "router-view"]
    });
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("has 3 links", () => {
    const navLinks = wrapper.findAll(".nav-item");
    expect(navLinks.length).toEqual(3);
  });
});
