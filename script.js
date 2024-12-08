// Eye movement logic
const eyeContainer = document.getElementById('eye-container');
const pupil = document.getElementById('pupil');

document.addEventListener('mousemove', (e) => {
    const rect = eyeContainer.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
    const distance = Math.min(20, Math.sqrt((e.clientX - eyeX) ** 2 + (e.clientY - eyeY) ** 2));
    pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
});
