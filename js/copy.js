function copyToClipboard(email) {
  const el = document.createElement('textarea');
  el.value = email;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  document.getElementById('myTooltip').innerHTML = 'Copied to clipboard'
}