// ── Mobile navigation ──────────────────────────────────────────
const hbg = document.getElementById('hbg');
const nav = document.getElementById('nav');

hbg.addEventListener('click', function () {
  nav.classList.toggle('open');
});

document.querySelectorAll('#nav a').forEach(function (a) {
  a.addEventListener('click', function () {
    nav.classList.remove('open');
  });
});

// ── Fade-in on scroll ──────────────────────────────────────────
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('vis');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fi').forEach(function (el) {
  observer.observe(el);
});

// ── Contact form ───────────────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  var btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(function () {
    btn.style.display = 'none';
    var msg = document.getElementById('successMsg');
    msg.style.display = 'block';
    e.target.reset();
  }, 900);
}
