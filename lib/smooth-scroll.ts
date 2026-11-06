// Eased scroll to a section on the page. The browser's own smooth scroll finishes in
// about half a second, which is too quick to notice, so this one takes about a second.
export function scrollToId(id: string, duration = 1100) {
  const target = document.getElementById(id);
  if (!target) return;

  const scrollMargin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const startY = window.scrollY;
  const endY = Math.max(0, target.getBoundingClientRect().top + startY - scrollMargin);

  // Reduced motion: jump straight to the section.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: endY, behavior: "instant" as ScrollBehavior });
    return;
  }

  const distance = endY - startY;
  const startTime = performance.now();
  // Ease in and out (cubic).
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const step = (now: number) => {
    const t = Math.min((now - startTime) / duration, 1);
    // "instant" overrides the page's CSS smooth scrolling, so each frame lands where it is set.
    window.scrollTo({ top: startY + distance * ease(t), behavior: "instant" as ScrollBehavior });
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
