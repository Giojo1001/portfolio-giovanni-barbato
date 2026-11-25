const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Apri il menu' : 'Chiudi il menu');
  navigation.classList.toggle('open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Apri il menu');
  });
});

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    button.classList.add('active');

    const category = button.dataset.filter;

    document.querySelectorAll('.project-card').forEach((card) => {
      const visible =
        category === 'all' ||
        card.dataset.category.split(' ').includes(category);

      card.classList.toggle('is-hidden', !visible);
    });
  });
});

const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');

  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Attiva tema chiaro' : 'Attiva tema scuro'
  );

  document.querySelector('meta[name="theme-color"]').content =
    isDark ? '#20211f' : '#f4f2ec';
});

document.querySelector('#year').textContent = new Date().getFullYear();