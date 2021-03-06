const content = [...document.getElementsByClassName('content')];
const scrollArea = document.getElementById('scroll-area');

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.25,
};

let observer = new IntersectionObserver(callback, options);
let count = 1;

content.forEach(el => observer.observe(el));

function callback(entries) {
  entries.forEach(entry => {
    const visibleElement = entry.target;

    if (entry.isIntersecting) {
      visibleElement.classList.remove('not-visible');
    }
  });
};
