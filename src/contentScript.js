let timeout = 0;
const style = document.createElement('style');
style.textContent = `
* {
  cursor: none !important;
}
`;

window.addEventListener('mousemove', event => {
  if (timeout)
    clearTimeout(timeout);
  style.remove();
  timeout = setTimeout(() => {
    document.head.appendChild(style);
    timeout = null;
  }, 2500);
}, { capture: true, passive: true });
