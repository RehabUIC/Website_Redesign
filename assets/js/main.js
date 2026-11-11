// Project filters (projects.html)
document.querySelectorAll('.filter-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var filter = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(function (b) {
      var on = b === btn;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.querySelectorAll('#project-grid .card').forEach(function (card) {
      card.hidden = !(filter === 'all' || card.dataset.category === filter);
    });
  });
});

// "Cite" buttons show/hide BibTeX (index.html)
document.querySelectorAll('.bib-toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var box = document.getElementById(btn.getAttribute('aria-controls'));
    var open = box.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});
