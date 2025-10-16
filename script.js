// ===== SWITCH SECTIONS =====
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

navButtons.forEach(button => {
  button.addEventListener('click', () => {

    navButtons.forEach(btn => btn.classList.remove('active'));

    sections.forEach(sec => sec.classList.remove('active'));

    button.classList.add('active');
    const target = button.getAttribute('data-section');
    document.getElementById(target).classList.add('active');
  });
});


// ===== THEME TOGGLE =====
const toggleTheme = document.getElementById('toggle-theme');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = toggleTheme.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});
