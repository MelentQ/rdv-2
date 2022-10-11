import Sticky from "sticky-js";

export default function sticky() {
  const containers = document.querySelectorAll('.js-sticky');

  containers.forEach(container => {
    const wrapper = container.parentNode;
    wrapper.style.minHeight = `${container.offsetHeight}px`;
  })

  new Sticky('.js-sticky', {
    stickyClass: "active"
  });
}