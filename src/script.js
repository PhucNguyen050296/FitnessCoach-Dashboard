// year
    document.getElementById('year').textContent = new Date().getFullYear();

    // mobile sidebar toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const sidebarMobile = document.getElementById('sidebar-mobile');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileClose = document.getElementById('mobileClose');

    function openMobileSidebar() {
      sidebarMobile.classList.remove('hidden');
      sidebarMobile.classList.add('flex');
      document.body.style.overflow = 'hidden';
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
    function closeMobileSidebar() {
      sidebarMobile.classList.add('hidden');
      sidebarMobile.classList.remove('flex');
      document.body.style.overflow = '';
      mobileToggle.setAttribute('aria-expanded', 'false');
    }

    mobileToggle.addEventListener('click', openMobileSidebar);
    mobileOverlay.addEventListener('click', closeMobileSidebar);
    mobileClose.addEventListener('click', closeMobileSidebar);

    // enhance accessibility: close sidebar on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMobileSidebar();
    });