/* ============================================================
   PORTFOLIO WEBSITE — SHARED SCRIPTS (all pages)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  // ---------- Mobile menu ----------
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  if (!window.__burgerBound) {
    window.__burgerBound = true;
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
  }

  // ---------- Navbar dropdowns (Services + Projects) ----------
  var navDropdowns = [];

  function bindDropdown(buttonId, menuId) {
    var button = document.querySelector(buttonId);
    var menu = document.querySelector(menuId);
    if (!button || !menu) return;
    var holder = button.closest('.dropdown');
    var arrow = button.querySelector('.dd-arrow');
    var dd = { button: button, menu: menu, pinned: false };
    navDropdowns.push(dd);

    function setOpen(open) {
      menu.classList.toggle('show', open);
      button.classList.toggle('open', open);
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (arrow) arrow.textContent = open ? '\u25B2' : '\u25BC';
    }

    button.addEventListener('click', function (event) {
      event.stopPropagation();
      var wasOpen = menu.classList.contains('show');
      navDropdowns.forEach(function (other) {
        if (other !== dd && other.menu.classList.contains('show')) {
          other.pinned = false;
          other.menu.classList.remove('show');
          other.button.classList.remove('open');
          other.button.setAttribute('aria-expanded', 'false');
          var otherArrow = other.button.querySelector('.dd-arrow');
          if (otherArrow) otherArrow.textContent = '\u25BC';
        }
      });
      var stayOpen = (wasOpen && !dd.pinned) ? true : !wasOpen;
      dd.pinned = stayOpen;
      setOpen(stayOpen);
    });

    if (holder && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      holder.addEventListener('mouseenter', function () {
        if (dd.pinned) return;
        setOpen(true);
      });
      holder.addEventListener('mouseleave', function () {
        if (dd.pinned) return;
        setOpen(false);
      });
    }
  }

  function closeNavDropdowns() {
    navDropdowns.forEach(function (dd) {
      dd.pinned = false;
      dd.menu.classList.remove('show');
      dd.button.classList.remove('open');
      dd.button.setAttribute('aria-expanded', 'false');
      var arrow = dd.button.querySelector('.dd-arrow');
      if (arrow) arrow.textContent = '\u25BC';
    });
  }

  if (!window.__navDropdownBound) {
    window.__navDropdownBound = true;
    bindDropdown('#servicesBtn', '#servicesMenu');
    bindDropdown('#projectsBtn', '#projectsMenu');

    document.addEventListener('click', function (event) {
      var insideAny = navDropdowns.some(function (dd) {
        return dd.button.contains(event.target) || dd.menu.contains(event.target);
      });
      if (!insideAny) closeNavDropdowns();
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
