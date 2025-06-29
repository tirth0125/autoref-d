// Mouse-tracking spotlight
const root = document.documentElement;
window.addEventListener('mousemove', e => {
  root.style.setProperty('--spot-x', (e.clientX / window.innerWidth * 100) + '%');
  root.style.setProperty('--spot-y', (e.clientY / window.innerHeight * 100) + '%');
});
