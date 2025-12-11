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


      // ----- Revenue Trend Line Chart -----
  const revenueCtx = document.getElementById('revenueChart').getContext('2d');

  new Chart(revenueCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue',
        data: [1200, 2100, 1800, 2400, 2900, 3500],
        fill: false,
        borderColor: '#4F46E5',
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#4F46E5'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          border: { display: false },
          grid: { color: '#F1F5F9' }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });

  // ----- Lead Sources Pie Chart -----
  const leadCtx = document.getElementById('leadSourcesChart').getContext('2d');

  new Chart(leadCtx, {
    type: 'pie',
    data: {
      labels: ['Instagram', 'Facebook', 'TikTok', 'Email'],
      datasets: [{
        data: [40, 25, 20, 15],
        backgroundColor: ['#4F46E5', '#6366F1', '#A5B4FC', '#E0E7FF']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { padding: 20 }
        }
      }
    }
  });