// Mobile nav toggle
document.getElementById('hbg').addEventListener('click', function () {
  document.getElementById('nav').classList.toggle('open');
});
document.querySelectorAll('#nav a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.getElementById('nav').classList.remove('open');
  });
});

// Fade-in on scroll
var obs = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add('vis');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fi').forEach(function (el) { obs.observe(el); });

// Contact form submit
function handleSubmit(e) {
  e.preventDefault();
  var btn = document.getElementById('submitBtn');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(function () {
    btn.style.display = 'none';
    document.getElementById('successMsg').style.display = 'block';
    e.target.reset();
  }, 900);
}
