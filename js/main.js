/* ============================================================
   PORTFOLIO WEBSITE — SHARED SCRIPTS (all pages)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  // ---------- Mobile menu ----------
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      burger.classList.toggle('open');
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('open');
        menu.classList.remove('open');
      });
    });
  }

  // ---------- Footer year ----------
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ---------- Scroll reveal ----------
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ---------- Work page: category filter ----------
  var filterBtns = document.querySelectorAll('.filter-btn');
  var workSections = document.querySelectorAll('.work-section');
  if (filterBtns.length && workSections.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        workSections.forEach(function (sec) {
          var match = filter === 'all' || sec.getAttribute('data-category') === filter;
          sec.classList.toggle('hidden-card', !match);
          if (match) sec.classList.add('visible');
        });
      });
    });
  }

  // ---------- Contact form (demo only) ----------
  var form = document.getElementById('contact-form');
  var success = document.getElementById('form-success');
  if (form && success) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      success.classList.add('show');
      form.reset();
      setTimeout(function () { success.classList.remove('show'); }, 5000);
    });
  }

  // ---------- Lightbox: full-size image / video viewer (Messenger style) ----------
  var lightbox = null;

  function ensureLightbox() {
    if (lightbox) return;
    lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img alt=""><video controls playsinline></video>';
    document.body.appendChild(lightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.closest('.lightbox-close')) {
        e.stopPropagation();
        closeLightbox();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  function closeLightbox() {
    if (!lightbox) return;
    var v = lightbox.querySelector('video');
    if (v) v.pause();
    lightbox.classList.remove('open', 'show-img', 'show-video');
  }

  document.addEventListener('click', function (e) {
    var img = e.target.closest('.work-thumb img');
    if (img) {
      e.preventDefault();
      ensureLightbox();
      var v = lightbox.querySelector('video');
      v.pause();
      v.removeAttribute('src');
      v.load();
      lightbox.querySelector('img').src = img.src;
      lightbox.querySelector('img').alt = img.alt;
      lightbox.classList.remove('show-video');
      lightbox.classList.add('open', 'show-img');
      return;
    }
    var vid = e.target.closest('.work-thumb video');
    if (vid) {
      e.preventDefault();
      ensureLightbox();
      var lv = lightbox.querySelector('video');
      lv.src = vid.src;
      lv.load();
      lightbox.classList.remove('show-img');
      lightbox.classList.add('open', 'show-video');
      lv.play();
    }
  });
});
