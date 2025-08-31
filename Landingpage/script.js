document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (btn.getAttribute('href') === "#about") {
      e.preventDefault();
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    }
  });
});
