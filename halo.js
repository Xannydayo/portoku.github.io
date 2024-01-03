document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');

    // Fungsi untuk menampilkan elemen "Tentang Saya" dengan animasi
    function showAboutSection() {
        aboutSection.classList.add('show');
    }

    // Fungsi untuk memeriksa apakah elemen "Tentang Saya" dalam viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Mendeteksi ketika elemen "Tentang Saya" dalam viewport dan menampilkan animasinya
    window.addEventListener('scroll', function() {
        if (isElementInViewport(aboutSection)) {    
            showAboutSection();
            // Setelah animasi selesai, hentikan mendengarkan peristiwa scroll
            window.removeEventListener('scroll', arguments.callee);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cardSection = document.querySelector('.card-section');

    // Fungsi untuk menampilkan elemen "Tentang Saya" dengan animasi
    function showcardSection() {
        cardSection.classList.add('show');
    }

    // Fungsi untuk memeriksa apakah elemen "Tentang Saya" dalam viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Mendeteksi ketika elemen "Tentang Saya" dalam viewport dan menampilkan animasinya
    window.addEventListener('scroll', function() {
        if (isElementInViewport(cardSection)) {     
            showcardSection();
            // Setelah animasi selesai, hentikan mendengarkan peristiwa scroll
            window.removeEventListener('scroll', arguments.callee);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const currentMode = localStorage.getItem('dark-mode');

    // Fungsi untuk mengaktifkan Dark Mode
    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    }

    // Fungsi untuk menonaktifkan Dark Mode
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    }

    // Fungsi untuk mengatur Dark Mode berdasarkan preferensi pengguna
    function setInitialMode() {
        if (currentMode === 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }

    setInitialMode();

    // Mendengarkan klik pada tombol Dark Mode
    darkModeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});

// Initialize ScrollReveal
ScrollReveal().reveal('.animate-on-scroll', {
    delay: 200,
    distance: '20px',
    duration: 800,
    origin: 'bottom',
    reset: true,
  });
  
  // Add the "animate-on-scroll" class to elements you want to animate
  
