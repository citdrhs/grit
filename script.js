// Mobile navigation toggle
const nav = document.querySelector('.nav');
    const navToggle = document.querySelector('.nav-toggle');
    if (nav && navToggle) {
      navToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('nav-open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
    
// index.html countdown timer
    document.getElementById('year') ? document.getElementById('year').textContent = new Date().getFullYear() : null;
    function updateCountdown() {
      const now = new Date();
      const eventDate = new Date('2026-03-09T09:00:00-04:00');
      const timeDiff = eventDate - now;
      if (timeDiff <= 0) {
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
      }
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      const daysElement = document.getElementById('days');
      const hoursElement = document.getElementById('hours');
      const minutesElement = document.getElementById('minutes');
      const secondsElement = document.getElementById('seconds');
      if (daysElement && hoursElement && minutesElement && secondsElement) {
        daysElement.textContent = days;
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
      }
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);