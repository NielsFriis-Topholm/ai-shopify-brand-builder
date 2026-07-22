/* AI Shopify Brand Builder — light interactivity */

// FAQ accordion
document.querySelectorAll('.faq-item').forEach((item) => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', () => {
    const open = item.classList.contains('open');
    // close others
    document.querySelectorAll('.faq-item.open').forEach((el) => {
      el.classList.remove('open');
      el.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!open) {
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// Video placeholders — swap this for a real embed (YouTube/Wistia/Vimeo).
// Right now clicking just logs; replace the [data-video] blocks with an <iframe> when you have a VSL.
document.querySelectorAll('[data-video]').forEach((el) => {
  const activate = () => {
    console.log('Video placeholder clicked — replace with your embed.');
  };
  el.addEventListener('click', activate);
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
  });
});
