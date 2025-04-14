export const scrollToSection = (ref) => {
  if (!ref || !ref.current) return;

  ref.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
