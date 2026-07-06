const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => links.classList.remove('open'));
});

function handleForm(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const subject = encodeURIComponent('Kavor Industries Inquiry');
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\n` +
    `Email: ${data.get('email')}\n` +
    `Company: ${data.get('company')}\n` +
    `Service: ${data.get('service')}\n\n` +
    `${data.get('message')}`
  );
  window.location.href = `mailto:info@kavorindustries.com?subject=${subject}&body=${body}`;
  return false;
}
