export const DebugWidths = () => {
  if (typeof window === 'undefined') return null;
  const els = Array.from(document.querySelectorAll('*')) as HTMLElement[];
  const overflows = els.filter(el => el.scrollWidth > window.innerWidth);
  console.log("Elements wider than window:", overflows);
  return null;
}
