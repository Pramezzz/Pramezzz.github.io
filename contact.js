// Hamburger overlay toggle (ไม่เปลี่ยน)
const toggle = document.getElementById('menu-toggle');
const overlay = document.getElementById('overlay');
setupSubmenu('toggle-submenu', 'submenu');
setupSubmenu('toggle-port', 'submenu-port');




toggle.addEventListener('change', () => {
  document.body.classList.toggle('menu-open', toggle.checked);
  if (!toggle.checked) {
    closeSubmenu('submenu', 'toggle-submenu');
    closeSubmenu('submenu-port', 'toggle-port');
  }
});
overlay.addEventListener('click', () => {
  toggle.checked = false;
  document.body.classList.remove('menu-open');
  closeSubmenu('submenu', 'toggle-submenu');
  closeSubmenu('submenu-portf', 'toggle-port');
});

function setupSubmenu(btnId, submenuId) {
  const btn = document.getElementById(btnId);
  const sub = document.getElementById(submenuId);

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = sub.classList.toggle('submenu-active');
    btn.classList.toggle('active', open);
  });
}

function closeSubmenu(submenuId, btnId) {
  const sub = document.getElementById(submenuId);
  const btn = document.getElementById(btnId);
  if (sub && btn) {
    sub.classList.remove('submenu-active');
    btn.classList.remove('active');
  }
}


document.getElementById('toggle-port').addEventListener('click', function() {
  const submenu = document.getElementById('submenu-port');
  const icon = this.querySelector('i');
  
  submenu.classList.toggle('submenu-active');
  this.classList.toggle('active');
});
document.getElementById('toggle-submenu').addEventListener('click', function() {
  const submenu = document.getElementById('submenu');
  const icon = this.querySelector('i');
  
  submenu.classList.toggle('submenu-active');
  this.classList.toggle('active');
});
// เรียกตั้งค่าทั้งสองเมนู
setupSubmenu('toggle-submenu', 'submenu');
setupSubmenu('toggle-port', 'submenu-port');